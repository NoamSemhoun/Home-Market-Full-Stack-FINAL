const express = require('express');
const Joi = require('joi');
const util = require('./../util')
const database = require('./../../DataBase/index')
const router = express.Router();

// Validation
const validateScheme = Joi.object({
    name:  Joi.string().alphanum().min(3).max(50),
    phone: Joi.string().alphanum().min(3).max(20),
    email: Joi.string().min(3).max(50),
    address: Joi.string().email().min(3).max(80),
    username: Joi.string().alphanum().min(3).max(20),
    password: Joi.string().alphanum().min(3).max(20),
    'repeat-password': Joi.ref('password')
});


function validate(instance,requireFeilds = []){

    if (requireFeilds.length === 0) return validateScheme.validate(instance);

    for (const feild in requireFeilds){
        if (!(feild in instance)) return {error: `"${feild}" is required` };
    }
    return validateScheme.validate(instance);
}

async function checkAccess(apiKey,userId){
    // when call update, check that the apikey can change the userId
    let metadata = await database.getTable('usersMetadata',{apiKey:apiKey});
    if (metadata.error) return res.status(404).send(metadata);

    data = await database.getTable('users',{metadataId:metadata.id});
    if (data.error) return res.status(404).send(data);

    return data.id === userId ?
        {success:'Access Confirmed.'} : 
        {error:'Access Denied'};
}

router.post('/login',async (req,res)=>{
    const {user} = req.body;

    let error = validate(user, ['username','password']);
    if (error.error) return res.status(400).send(error);

    let metadata = await database.getTable('usersMetadata',{username:user.username,password:user.password});
    if (metadata.error) return res.status(404).send(metadata);

    let data = await database.getTable('users',{id:metadata.userId});
    if (data.error) return res.status(404).send(data);
    
    delete metadata.id;

    return res.send({'data':{...metadata,...data}})
});

router.post('/signup',async (req,res)=>{

    const {user} = req.body;

    let error = validate(user, ['username','password','repeat-password','name','phone','email','address']);
    if (error.error) return res.status(400).send(error);
    
    const userMetadata = {
        username: user.username,
        password: user.password,
        apiKey: util.generateRandomString(20),
        userRank: 'user'
    }

    let metadata = await database.insertToTable('usersMetadata',[userMetadata]);
    if (metadata.error) return res.status(404).send(metadata);

    const userData = {
        metadataId: metadata.insertId,
        name: user.name,
        phone: user.phone,
        email: user.email,
        address: user.address
    }

    let data = await database.insertToTable('users',[userData]);
    if (data.error){
        // TODO: if not goes well should delete from usersMetadata (safe delete).
        return res.status(404).send(data);
    }

    return res.send({'data':{id:data.insertId,...userData,...userMetadata}})
});


// Paths
router.post('/update/data',async (req,res)=>{
    const {user} = req.body;
    
    let error = await checkAccess(user.apiKey, user.id);
    if (error.error) return res.status(400).send(error);

    error = validate(user, []);
    if (error.error) return res.status(400).send(error);

    // check for tables to update
    // update the tables
    // return the full updated instance

    let metadata = await database.updateTable('')
    if (metadata.error) return res.status(404).send(metadata);

    return res.send({data:'Koko Lala'})
});

router.post('/update/metadata',(req,res)=>{
    return res.send({data:'Koko Lala'})
});


module.exports = {
    router,
    validate,
    checkAccess
}