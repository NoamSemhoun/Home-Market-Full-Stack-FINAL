const express = require('express');
const Joi = require('joi');
const util = require('./../util.js');
const database = require('./../../DataBase/index.js');

const router = express.Router();

const validateScheme = Joi.object({
    price: Joi.number().integer().min(1),
    title: Joi.string().alphanum().min(3).max(80),
    status: Joi.string().alphanum().min(3).max(20),
    description: Joi.string().alphanum().max(400),
    category: Joi.string().alphanum().min(3).max(50),
})


const lowerDataItems = ['id','price','title'];
const lowerDataImages = ['imageUrl'];
const accessFields = ['price','title','status','description','category']

// קבל את כולם של משתמש באופן של תצוגה מזערית
router.post('/',async (req,res)=>{

    // validate access
    const {apiKey} = req.body;
    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(404).send(userId);

    // get all the items and there images (lower-data)
    let items = await database.getTable('items',{userId:userId},lowerDataItems);
    if (items.error) return res.status(404).send(items);

    const errors = [];
    const imagesPromises = items.map(async (item)=>{
        let image = await database.getTable('images',{itemId:item.id, main:true},lowerDataImages);
        if (image.error) errors.push({[item.id]:image.error});
        item.mainImageUrl = image;
        return item;
    });
    await Promise.all(imagesPromises);
    if (errors.length > 0) return res.status(404).send({error:errors});

    // send back data
    return res.send({data:items})
});

// קבל אחד מלא לפי id
router.post('/:id',async (req,res)=>{
    // get item 
    let item = await database.getTable('items',{id:req.params.id});
    if (item.error) return res.status(404).send(item);
    item = item[0];

    // get images
    let images = await database.getTable('images',{itemId:item.id},lowerDataImages + ['main']);
    if (images.error) return res.status(404).send(images);

    item.mainImageUrl = util.predicatePop(images,(image)=>image.main).imageUrl;
    item.images = images

    // send back data
    return res.send({data:item})
});

// עריכת אחד לפי id
router.put('/:id',async (req,res)=>{
    // validate access
    const {id} = req.params;
    const {apiKey} = req.body;
    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(404).send(userId);

    // check for access for the item 
    let oldItem = await database.getTable('items', {id:id});
    if (oldItem.error) return res.status(404).send(oldItem);
    oldItem = oldItem[0];
    if (oldItem.userId !== userId) return res.status(404).send({error:'Access Denied'})

    const {item} = req.body;
    // validate data
    let error = util.validate(item, validateScheme, []);
    if (error.error) return res.status(400).send(error);
    
    // for each on of access feilds, if sended, take it else take what we have.
    const updateItem = util.updateInstance(oldItem,item,accessFields);

    error = await database.updateTable('items',['id'],[updateItem]);
    if (error.error) return res.status(404).send(error);

    // update images images
    // send back data
    return res.send({data:updateItem})
});


// העלאת פריט באופן מלא לשרת
router.post('/upload',async (req,res)=>{
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

    error = await database.insertToTable('items',[item])
    if (error.error) return res.status(400).send(error);

    // save images

    // send back data
    return res.send({data:item})
});

// קבל תוצאות חיפוש לפי מילות חיפוש באופן מזערי
router.post('/search',async (req,res)=>{
    const {query} = req.query;

    // get items by key-words
    let items = await database.searchInTable('items',query,['title','category','description']);
    if (items.error) return res.status(404).send(items);


    // get images
    const errors = [];
    const imagesPromises = items.map(async (item)=>{
        let image = await database.getTable('images',{itemId:item.id,main:true});
        if (image.error) errors.push({[item.id]:image.error});
        item.mainImageUrl = image.imageUrl;
        return item;
    });
    await Promise.all(imagesPromises);
    if (errors.length > 0) return res.status(404).send({error:errors});

    // send back data
    return res.send({data:items});
});

module.exports = router