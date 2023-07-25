const express = require('express');
const Joi = require('joi');
const util = require('./../util')
const router = express.Router();

const validationScheme = Joi.object({

})


router.post('/',(req,res)=>{
    return res.send({data:'Koko Lala'})
})



async function checkAccess(apiKey,resourceId){
    
}


module.exports = router