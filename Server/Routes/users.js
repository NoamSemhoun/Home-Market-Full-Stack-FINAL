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

const noAccessFeilds = ['apiKey','userRank'];


router.post('/login',async (req,res)=>{
    const {user} = req.body;

    let error = util.validate(user, validateScheme, noAccessFeilds, ['username','password']);
    if (error.error) return res.status(400).send(error);

    let metadata = await database.getTable('usersMetadata',{username:user.username,password:user.password});
    if (metadata.error) return res.status(404).send(metadata);

    let data = await database.getTable('users',{id:metadata.userId});
    if (data.error) return res.status(404).send(data);
    
    delete metadata.id;

    return res.send({'data':{...metadata[0],...data[0]}})
});

router.post('/signup',async (req,res)=>{

    const {user} = req.body;

    let error = util.validate(user, validateScheme, noAccessFeilds, ['username','password','repeat-password','name','phone','email','address']);
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
router.put('/:id',async (req,res)=>{
    const {user} = req.body;
    
    let error = await util.checkAccess(user.apiKey, req.params.id);
    if (error.error) return res.status(400).send(error);

    delete user.apiKey;
    error = util.validate(user, validateScheme, noAccessFeilds, []);
    if (error.error) return res.status(400).send(error);

    // check for tables to update
    const usersTableFeilds = ['name','phone','email','address']
    const metadataTableFeilds = ['username','password']
    const usersInstance = {}
    const usersMetaInstance = {}

    usersTableFeilds.forEach((feild)=>{
        if (feild in user){
            usersInstance[feild] = user[feild]
        }
    })
    metadataTableFeilds.forEach((feild)=>{
        if (feild in user){
            usersMetaInstance[feild] = user[feild]
        }
    })

    // update the tables
    let metadata = await database.updateTable('users',{id:req.params.id},[usersInstance])
    if (metadata.error) return res.status(404).send(metadata);

    let data = await database.updateTable('usersMetadata',{id:user.metadataId},[usersMetaInstance])
    if (data.error) return res.status(404).send(data);

    // return the full updated instance
    return res.send({data:user})
});


module.exports = router