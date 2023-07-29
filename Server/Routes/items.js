const express = require('express');
const Joi = require('joi');
const util = require('./../util.js');
const database = require(util.databaseRoutesPath + 'index.js');
const upload = require('./../multer.js');

const router = express.Router();

const validateScheme = Joi.object({
    price: Joi.number().integer().min(1),
    title: Joi.string().alphanum().min(3).max(80),
    delivery: Joi.boolean(),
    status: Joi.string().alphanum().min(3).max(20),
    description: Joi.string().alphanum().max(400),
    category: Joi.string().alphanum().min(3).max(50),
    brandUrl: Joi.string(),
    mainImage: Joi.string()
})


const lowerDataItems = ['id', 'price', 'title','uploadDate','delivery','mainImage'];
const lowerDataImages = ['imageUrl'];
const accessFields = ['price','title','delivery', 'status','description','category','brandUrl']

const uploadImages = upload.fields([
    {name:'images',maxCount: 9},
    {name:'main-image', maxCount:1}
]);

//test route for images
router.post('/test/:id',uploadImages, async (req,res)=>{
    // save images
    const {files} = req;
    if (!('main-image' in files)) return res.status(404).send({error:'Main Image is Required!'});
    

    const instances = files['images'].map((image)=>{
        return {
            itemId:req.params.id,
            imageUrl:image['path']
        } 
    });

    error = await database.insertToTable('images', instances);
    if (error.error) return res.status(404).send(error);

    error = await database.getTable('images', {itemId:req.params.id});
    if (error.error) return res.status(404).send(error);

    error.forEach((image)=>util.deleteFile(image.imageUrl));

    error = await database.removeFromTable('images',{id:req.params.id});
    if (error.error) return res.status(404).send(error);
});

// קבל אחד מלא לפי id
router.get('/:id',async (req,res)=>{

    // get item 
    let item = await database.getTable('items',{id:req.params.id});
    if (item.error) return res.status(404).send(item);

    // get images
    let images = await database.getTable('images',{itemId:item.id},lowerDataImages);
    if (images.error) return res.status(404).send(images);

    item.images = images
    //check for address, city to the item

    // send back data
    return res.send({data:item})
});

// קבל תוצאות חיפוש לפי מילות חיפוש באופן מזערי
router.get('/search',async (req,res)=>{
    const {query} = req.query;

    // get items by key-words
    let items = await database.searchInTable('items', query ,['title','category','description'],lowerDataItems);
    if (items.error) return res.status(404).send(items);

    // send back data
    return res.send({data:items});
});


// עריכת אחד לפי id
router.put('/:id', uploadImages, async (req,res)=>{
    // validate access
    const {id} = req.params;
    const {apiKey} = req.body;
    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(404).send(userId);

    // check access for the item 
    const {item} = req.body;
    let oldItem = await database.getTable('items', {id:id});
    if (oldItem.error) return res.status(404).send(oldItem);
    if (oldItem.userId !== userId) return res.status(404).send({error:'Access Denied'})

    // validate data
    let error = util.validate(item, validateScheme);
    if (error.error) return res.status(400).send(error);
    
    const updateItem = util.updateInstance(oldItem,item,accessFields);
    updateItem.uploadDate = uril.getDatetime();

    // update all the images
    const {files} = req;
    const instances = files['images'].map((image)=>{
        return {
            itemId:updateItem.id,
            imageUrl:image['path']
        } 
    });
    error = await database.getTable('images', {itemId:updateItem.id},lowerDataImages);
    if (error.error) return res.status(404).send(error);

    error.forEach((image)=>util.deleteFile(image.imageUrl));

    error = await database.removeFromTable('images',{id:updateItem.id});
    if (error.error) return res.status(404).send(error);

    error = await database.insertToTable('images',instances);
    if (error.error) return res.status(404).send(error);   

    // update the main image
    if ('main-image' in files){
        let mainImage = files['main-image'][0]['path'];
        util.deleteFile(updateItem.mainImage);
        updateItem.mainImage = mainImage;
    } 

    // update in the database
    error = await database.updateTable('items',['id'],[updateItem]);
    if (error.error) return res.status(404).send(error);

    // send back data
    updateItem.images = instances.map(instance => instance.imageUrl);
    return res.send({data:updateItem});
});


// קבל את כולם של משתמש באופן של תצוגה מזערית
router.post('/',async (req,res)=>{

    // validate access
    const {apiKey} = req.body;
    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(404).send(userId);

    // get all the items and there images (lower-data)
    let items = await database.getTable('items',{userId:userId},lowerDataItems);
    if (items.error) return res.status(404).send(items);

    // send back data
    return res.send({data:items})
});


// העלאת פריט באופן מלא לשרת
router.post('/upload', uploadImages, async (req,res)=>{
    // validate access
    const {apiKey} = req.body;
    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(404).send(userId);

    // validate data
    const {item} = req.body;
    let error = util.validate(item, validateScheme, accessFields);
    if (error.error) return res.status(400).send(error);

    // save item in database
    item.userId = userId;
    item.uploadDate = util.getDatetime();

    // save images
    const {files} = req;

    if (!('main-image' in files)) return res.status(404).send({error:'Main Image is Required!'});
    item.mainImage = files['main-image'][0]['path'];

    error = await database.insertToTable('items',[item])
    if (error.error) return res.status(400).send(error);


    const instances = files['images'].map((image)=>{
        return {
            itemId:error.insertId,
            imageUrl:image['path'],
        } 
    });

    error = await database.insertToTable('images',instances);
    if (error.error) return res.status(404).send(error);


    // send back data
    updateItem.images = instances.map(instance => instance.imageUrl);
    return res.send({data:item})
});


module.exports = router