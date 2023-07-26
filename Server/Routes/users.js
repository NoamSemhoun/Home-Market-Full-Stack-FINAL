const express = require('express');
const Joi = require('joi');
const util = require('./../util.js');
const database = require('./../../DataBase/index.js');
const router = express.Router();

// Validation
const validateScheme = Joi.object({
    fname:  Joi.string().alphanum().min(3).max(50),
    lname:  Joi.string().alphanum().min(3).max(50),
    phone: Joi.string().alphanum().min(3).max(20),
    email: Joi.string().email().min(3).max(50),
    address: Joi.string().min(3).max(80),
    username: Joi.string().alphanum().min(3).max(20),
    password: Joi.string().alphanum().min(3).max(20),
    'repeat-password': Joi.ref('password')
});

const usersAccessFields = ['fname','lname','phone','email','address'];
const metadataAccessFields = ['username','password'];

/**
 * בקשה להתחברות של משתמש על ידי שליחה של שם משתמש וסיסמא
 * דוגמא לבקשה: (body)
    {
        "user":{
            "username":"AvishayDev",
            "password":"123" 
        }
    }
 */
router.post('/login',async (req,res)=>{
    const {user} = req.body;

    let error = util.validate(user, validateScheme, ['username','password']);
    if (error.error) return res.status(400).send(error);

    let metadata = await database.getTable('usersMetadata',{username:user.username,password:user.password});
    if (metadata.error) return res.status(404).send(metadata);
    if (metadata instanceof Array) return res.status(404).send({error:`Username ${user.username} Dosen't Exists!`});

    let data = await database.getTable('users',{metadataId:metadata.id});
    if (data.error) return res.status(404).send(data);
    
    delete metadata.id;

    return res.send({'data':{...metadata,...data}})
});

/**
 * בקשה להרשמה של משתמש חדש עם השדות הנדרשים.
 * דוגמא לבקשה: (body)
    {
    "user":{
        "username":"AvishayDev",
        "password":"123",
        "repeat-password":"123",
        "name":"koko",
        "phone":"0342",
        "email":"52rf.com",
        "address":"koko lala"
    }
    }
 */
router.post('/signup',async (req,res)=>{

    const {user} = req.body;

    let error = util.validate(user, validateScheme, ['username','password','repeat-password','name','phone','email','address']);
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

/**
 * עדכון נתונים של משתמש
 * דוגמאת שימוש: (body)
 
 */
router.put('/:id',async (req,res)=>{
    const {user} = req.body;
    
    let error = await util.checkAccess(user.apiKey, req.params.id);
    if (error.error) return res.status(400).send(error);

    delete user.apiKey;
    const requireFields = 'password' in user ? ['repeat-password'] : [];
    error = util.validate(user, validateScheme, []);
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
    // return the full updated instance
    return res.send({data:{...userInstance,...metadataInstance}})
});


module.exports = router