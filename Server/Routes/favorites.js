const express = require('express');
const util = require('./../util.js');
const database = require(util.databaseRoutesPath + 'index.js');

const router = express.Router();


// add one favorite for item
router.post('/add/:id', async (req,res)=>{
    // check who is the user
    const {id} = req.params;
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // add the instance to the table
    let error = await database.insertToTable('favorites', [{itemId:id, userId:userId}]);
    if (error.error) return res.status(500).send(error);

    // return for success
    return res.status(201).send({data:'success'});
});

// subtruct one favorite for item
router.post('/sub/:id', async (req,res)=>{
    // check who is the user
    const {id} = req.params;
    const {apiKey} = req.body;
    if (!apiKey) return res.status(400).send({error:'please send apiKey field'});

    const userId = await util.getUserId(apiKey);
    if (userId.error) return res.status(500).send(userId);

    // remove the instance from the table
    let error = await database.removeFromTable('favorites', [{itemId:id, userId:userId}]);
    if (error.error) return res.status(500).send(error);

    // return for success
    return res.status(201).send({data:'success'});
});

module.exports = router