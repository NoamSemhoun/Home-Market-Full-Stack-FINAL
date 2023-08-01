const express = require('express');
const Joi = require('joi');
const util = require('./../util.js');
const database = require(util.databaseRoutesPath + 'index.js');
const upload = require('./../multer.js');

const router = express.Router();

const validateScheme = Joi.object({
    price: Joi.number().integer().min(1),
    title: Joi.string().min(3).max(80),
    delivery: Joi.boolean(),
    status: Joi.string().min(3).max(20),
    description: Joi.string().max(400),
    category: Joi.string().min(3).max(50),
    brandUrl: Joi.string(),
    mainImage: Joi.string()
})


const lowerDataItems = ['id', 'price', 'title','uploadDate','delivery','mainImage'];
const lowerDataImages = ['imageUrl'];
const accessFields = ['price','title','delivery', 'status','description','category']

const uploadImages = upload.fields([
    {name:'images',maxCount: 9},
    {name:'main-image', maxCount:1}
]);

/**
 * קבלת מוצר יחיד לפי האיידי שלו עם כל הנתונים
 * 
 * Url: http://127.0.0.1:3001/items/id (the id of the item you get from the search or items/ request)
 * Data: {}
 * DataType: "item"
 * 
 * Return: {id, price, title, uploadDate, delivery, status, description, category, brandUrl, mainImage, images}
 * 
 */
router.get('/:id',async (req,res)=>{

    // get item 
    let item = await database.getTable('items',{id:req.params.id});
    if (item.error) return res.status(500).send(item);
    if (item.length === 0) return res.status(404).send({data: item});

    item.mainImage = '..\\' + item.mainImage;
    // get images
    let images = await database.getTable('images',{itemId:item.id},lowerDataImages);
    if (images.error) return res.status(500).send(images);

    item.images = images.map((image)=>{
        return '..\\' + image.imageUrl;
    });

    let favorites = await database.count('favorites',{itemId:item.id});
    if (favorites.error) return res.status(500).send(favorites);

    item.favorites = favorites;
    // send back data
    delete item.userId;
    return res.status(200).send({data:item})
});

// קבל תוצאות חיפוש לפי מילות חיפוש באופן מזערי
/**
 * 
 * Url: http://127.0.0.1:3001/items/search?query=... (the ... is the words the user write to search)
 * Data: {}
 * DataType: "item"
 * 
 * Return: list of - {'id', 'price', 'title','uploadDate','delivery','mainImage'}
 * 
 */
router.get('/search',async (req,res)=>{
    const {query} = req.query;
    if (!query) return res.status(400).send({error:'please send query field'});

    // get items by key-words
    let items = await database.searchInTable('items', query ,['title','category','description'],lowerDataItems);
    if (items.error) return res.status(500).send(items);
    const statusCode = items.length === 0 ? 204 : 200;

    const {category, status, delivery} = req.query;

    items = items.filter(item => {
        let inside = false;
        if (category) inside = item.category === category || inside;
        if (status) inside = item.status === status || inside;
        if (delivery) inside = item.delivery === delivery || inside;
        
        return inside;
    })

    // send back data
    return res.status(statusCode).send({data:items});
});


router.get('/show', async (req,res)=>{
    const {page} = req.query;
    const pageSize = 12;
    if (!page) return res.status(400).send({error:'please send query field'});

    let items = await database.getOrderBy('items','uploadDate', page, pageSize);
    if (items.error) return res.status(500).send(items);

    return res.status(200).send({data:items});
})


/**
 * עריכת מוצר יחיד לפי האיידי שלו.
 * 
 * Url: http://127.0.0.1:3001/items/id (the id of the item you get from the search or items/ request)
 * Data: {apiKey, price, title, uploadDate, delivery, status, description, category, brandUrl, mainImage, images}
 * DataType: "item"
 * 
 * Return: {id, price, title, uploadDate, delivery, status, description, category, brandUrl, mainImage, images}
 * 
 */
router.put('/:id', uploadImages, async (req,res)=>{
    // validate access
    const {id} = req.params;
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // check access for the item 
    const item = JSON.parse(req.body.item);
    if (!item) return res.status(400).send({error:'please send item fields'});

    let oldItem = await database.getTable('items', {id:id});
    if (oldItem.error) return res.status(500).send(oldItem);
    if (oldItem.userId !== userId) return res.status(403).send({error:'Access Denied'})

    // validate data
    let error = util.validate(item, validateScheme);
    if (error.error) return res.status(400).send(error);
    
    const updateItem = util.updateInstance(oldItem,item,accessFields);
    updateItem.uploadDate = uril.getDatetime();

    // update all the images
    const {files} = req;
    if (files){
        const instances = files['images'].map((image)=>{
            return {
                itemId:updateItem.id,
                imageUrl:image['path']
            } 
        });
        error = await database.getTable('images', {itemId:updateItem.id},lowerDataImages);
        if (error.error) return res.status(500).send(error);
    
        error.forEach((image)=>util.deleteFile(image.imageUrl));
    
        error = await database.removeFromTable('images',{itemId:updateItem.id});
        if (error.error) return res.status(500).send(error);
    
        error = await database.insertToTable('images',instances);
        if (error.error) return res.status(500).send(error);   
    
        // update the main image
        if ('main-image' in files){
            let mainImage = files['main-image'][0]['path'];
            util.deleteFile(updateItem.mainImage);
            updateItem.mainImage = mainImage;
        }
    }

    // update in the database
    error = await database.updateTable('items',['id'],[updateItem]);
    if (error.error) return res.status(500).send(error);

    // send back data
    updateItem.images = instances.map(instance => instance.imageUrl);
    return res.status(201).send({data:updateItem});
});


/**
 *  קבל את כל המוצרים של משתמש באופן של תצוגה מזערית
 * 
 * Url: http://127.0.0.1:3001/items/
 * Data: {apiKey}
 * DataType: "item"
 * 
 * Return: {id, price, title, uploadDate, delivery, status, description, category, brandUrl, mainImage, images}
 * 
 */
router.post('/',async (req,res)=>{

    // validate access
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // get all the items and there images (lower-data)
    let items = await database.getTable('items',{userId:userId},lowerDataItems);
    if (items.error) return res.status(500).send(items);

    const statusCode = items.length === 0 ? 204 : 200;

    // send back data
    return res.status(statusCode).send({data:items});

});


/**
 *  קבל את כל המוצרים המועדפים של משתמש
 * 
 * Url: http://127.0.0.1:3001/items/favorites
 * Data: {apiKey}
 * 
 * Return: list of {id, price, title, uploadDate, delivery, mainImage}
 * 
 */
router.post('/favorites',async (req,res)=>{

    // validate access
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // get all the favorite items
    let favorites = await database.getTable('favorites',{userId:userId},['itemId']);
    if (items.error) return res.status(500).send(items);
    if (favorites.length === 0) return res.status(204).send({data:favorites});
    if (favorites instanceof Object) favorites = [favorites];

    // get all the items (lower-data)
    const errors = [];
    let items = favorites.map(async (fav)=>{
        const item = await database.getTable('items',{id:fav.itemId},lowerDataItems);
        if (items.error) errors.push(items);
        return item;
    })
    if (errors.length > 0) return res.status(500).send({error:errors});
    Promise.all(items);

    const statusCode = items.length === 0 ? 204 : 200;

    // send back data
    return res.status(statusCode).send({data:items});

});

// העלאת פריט באופן מלא לשרת
/**
 * העלאת פריט באופן מלא לשרת
 * 
 * Url: http://127.0.0.1:3001/items/upload
 * Data: {apiKey, price, title, uploadDate, delivery, status, description, category, brandUrl, mainImage, images}
 * DataType: "item"
 * 
 * Return: {id, price, title, uploadDate, delivery, status, description, category, brandUrl, mainImage, images}
 * 
 */
router.post('/upload', uploadImages, async (req,res)=>{
    // validate access
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // validate data
    const item = JSON.parse(req.body.item);
    if (!item) return res.status(400).send({error:'please send item fields'});

    let error = util.validate(item, validateScheme, accessFields);
    if (error.error) return res.status(400).send(error);

    // save item in database
    item.userId = userId;
    item.uploadDate = util.getDatetime();

    // save images
    const {files} = req;

    if (!files['main-image']) return res.status(400).send({error:'Main Image is Required!'});
    item.mainImage = files['main-image'][0]['path'];

    error = await database.insertToTable('items',[item])
    if (error.error) return res.status(500).send(error);


    if (files['images']){
        const instances = files['images'].map((image)=>{
            return {
                itemId:error.insertId,
                imageUrl:image['path'],
            } 
        });
    
        error = await database.insertToTable('images',instances);
        if (error.error) return res.status(500).send(error);

        // send back data
        item.images = instances.map(instance => instance.imageUrl);
    } else{
        item.images = [];
    }

    return res.status(201).send({data:item})
});


// מחיקת פריט לפי איידי
router.delete('/:id', async (req,res)=>{
    // validate access
    const {id} = req.params;
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // check access for the item 
    let oldItem = await database.getTable('items', {id:id});
    if (oldItem.error) return res.status(500).send(oldItem);
    if (oldItem.userId !== userId) return res.status(403).send({error:'Access Denied'});

    // delete the images
    error = await database.getTable('images', {itemId:oldItem.id},lowerDataImages);
    if (error.error) return res.status(500).send(error);
    
    // add the main image
    if (error instanceof Object) error = [error,{imageUrl:oldItem.mainImage}];
    else error.push({imageUrl:oldItem.mainImage});

    error.forEach((image)=>util.deleteFile(image.imageUrl));

    error = await database.removeFromTable('images',{itemId:oldItem.id});
    if (error.error) return res.status(500).send(error);

    // remove all the favorites
    error = await database.removeFromTable('favorites',{itemId:oldItem.id});
    if (error.error) return res.status(500).send(error);

    // delete the item
    error = await database.removeFromTable('items',{id:oldItem.id});
    if (error.error) return res.status(500).send(error);

    return res.status(200).send({data:oldItem});
})

module.exports = router