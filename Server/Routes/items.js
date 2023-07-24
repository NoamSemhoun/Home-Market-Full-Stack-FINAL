const express = require('express');
const Joi = require('joi');
const util = require('./../util');
const database = require('./../../DataBase/index');

const router = express.Router();

const validateScheme = Joi.object({
    price: Joi.number().integer().min(1),
    title: Joi.string().alphanum().min(3).max(80),
    status: Joi.string().alphanum().min(3).max(20),
    description: Joi.string().alphanum().max(400),
    category: Joi.string().alphanum().min(3).max(50),
    uploadDate: Joi.date(),
    userId: Joi.number().integer().min(1)
})

const noAccessFeilds = ['userId']

router.post('/get',async (req,res)=>{
    // validate access
    const {apiKey} = req.body;
    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(404).send(userId);

    // get all the items and there images
    
    // send back data
    return res.send({data:'Koko Lala'})
});

router.post('/upload',(req,res)=>{
    // validate access
    // validate data
    // send back data
    return res.send({data:'Koko Lala'})
});

async function checkAccess(apiKey,itemId){

    let itemData = await database.getTable('items', {id:itemId}, ['userId']);
    if (itemData.error) return itemData;
    itemData = itemData[0];

    return await util.checkAccess(apiKey,itemData.userId);
}


module.exports = router