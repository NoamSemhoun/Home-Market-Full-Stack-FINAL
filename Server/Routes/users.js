const express = require('express');
const Joi = require('joi');
const util = require('./../util.js');
const axios = require('axios');
const database = require('./../../DataBase/index.js');
const router = express.Router();

// Validation
const validateScheme = Joi.object({
    fname:  Joi.string().alphanum().min(3).max(50),
    lname:  Joi.string().alphanum().min(3).max(50),
    phone: Joi.string().min(3).max(20),
    email: Joi.string().email().min(3).max(50),
    address: Joi.string().min(3).max(60),
    city: Joi.string().min(3).max(30),
    password: Joi.string().min(6).max(20),
    'repeat-password': Joi.ref('password')
});

const usersAccessFields = ['fname','lname','phone','address','city'];
const metadataAccessFields = ['email','password'];

/**
 * בקשה להתחברות של משתמש על ידי שליחת אימייל וסיסמא
 * 
 * Url: http://127.0.0.1:3001/users/login
 * Data: {email, password}
 * DataType: "user"
 * 
 * Return: {id, fname, lname, phone, address, city, metadataId, email, apiKey, userRank}
 * 
 */
router.post('/login',async (req,res)=>{
    const {user} = req.body;

    let error = util.validate(user, validateScheme, ['email','password']);
    if (error.error) return res.status(400).send(error);

    let metadata = await database.getTable('usersMetadata',{email:user.email,password:user.password});
    if (metadata instanceof Array) return res.status(404).send({error:`email ${user.email} Dosen't Exists!`});
    if (metadata.error) return res.status(404).send(metadata);

    let data = await database.getTable('users',{metadataId:metadata.id});
    if (data.error) return res.status(404).send(data);
    
    delete metadata.id;
    delete metadata.password;

    return res.send({'data':{...metadata,...data}})
});

/**
 * בקשה להרשמה של משתמש חדש עם השדות הנדרשים.
 * 
 * Url: http://127.0.0.1:3001/users/signup
 * Data: {'fname', 'lname','phone','address','city', 'email','password','repeat-password'}
 * DataType: "user"
 * 
 * Return: {id, fname, lname, phone, address, city, metadataId, email, apiKey, userRank}
 * 
 */
router.post('/signup',async (req,res)=>{

    const {user} = req.body;

    let error = util.validate(user, validateScheme, ['fname', 'lname','phone','address', 'email','city','password','repeat-password']);
    if (error.error) return res.status(400).send(error);
    
    const userMetadata = {
        email: user.email,
        password: user.password,
        apiKey: util.generateRandomString(20),
        userRank: 'user'
    }

    let metadata = await database.insertToTable('usersMetadata',[userMetadata]);
    if (metadata.error) return res.status(404).send(metadata);

    const userData = {
        fname: user.fname,
        lname:user.lname,
        phone: user.phone,
        address: user.address,
        city: user.city,
        metadataId: metadata.insertId
    }

    let data = await database.insertToTable('users',[userData]);
    if (data.error){
        await database.removeFromTable('usersMetadata',{id:metadata.insertId})
        return res.status(404).send(data);
    }

    delete userMetadata.password;
    return res.send({'data':{id:data.insertId,...userData,...userMetadata}})
});

/**
 * עדכון נתונים של משתמש
 * 
 * Url: http://127.0.0.1:3001/users/id (the id of the user you get from the signup/signin request)
 * Data: (all the fields are optional, if password sent, repeat-password shoudbe sended too)
 * {'fname', 'lname','phone','address','city', 'email','password','repeat-password'}
 * DataType: "user"
 * 
 * Return: {id, fname, lname, phone, address, city, metadataId, email, apiKey, userRank}
 * 
 */
router.put('/:id',async (req,res)=>{
    const {user} = req.body;
    
    let error = await util.checkAccess(user.apiKey, req.params.id);
    if (error.error) return res.status(400).send(error);

    delete user.apiKey;
    const requireFields = 'password' in user ? ['password', 'repeat-password'] : [];
    error = util.validate(user, validateScheme, requireFields);
    if (error.error) return res.status(400).send(error);

    // check for tables to update
    let data = await database.getTable('users',{id:req.params.id})
    if (data.error) return res.status(404).send(data);

    let metadata = await database.getTable('usersMetadata', {id:data.metadataId})
    if (metadata.error) return res.status(404).send(metadata);

    const userInstance = util.updateInstance(data,user,usersAccessFields);
    const metadataInstance = util.updateInstance(metadata,user,metadataAccessFields);
    
    // update the tables
    data = await database.updateTable('users', ['id'], [userInstance])
    if (data.error) return res.status(404).send(data);

    metadata = await database.updateTable('usersMetadata', ['id'], [metadataInstance])
    if (metadata.error) return res.status(404).send(metadata);

    delete metadataInstance.id;
    delete metadataInstance.password;
    // return the full updated instance
    return res.send({data:{...userInstance,...metadataInstance}})
});

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    const {user} = req.body;
    
    //check access for deleting this user
    let error = await util.checkAccess(user.apiKey, id);
    if (error.error) return res.status(400).send(error);
    
    // remove all his items (if exists)
    let items = await database.getTable('items',{userId:id});
    if (items.error) return res.status(404).send(items);
    if (items instanceof Object) items = [items];
    
    const errors = [];
    const itemsPromises = items.map(async (item)=>{

        const body = {apiKey:user.apiKey}
        const response = await axios.delete(`http://127.0.0.1:3001/items/${item.id}`, body);
        if (response.error) errors.push(response);
    });

    if (errors) return res.status(404).send(errors);
    await Promise.all(itemsPromises);

    // remove the user from 'users' table
    error = await database.removeFromTable('users',{id:id});
    if (error.error) return res.status(404).send(error);

    // remove user from 'usersMetadata' table
    error = await database.removeFromTable('usersMetadata',{id:user.metadataId});
    if (error.error) return res.status(404).send(error);
})


module.exports = router