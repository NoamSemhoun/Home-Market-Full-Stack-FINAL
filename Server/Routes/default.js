const express = require('express');
const Joi = require('joi');
const router = express.Router();

const validationScheme = Joi.object({
    userId: Joi.number().integer().min(1).required(),
    title: Joi.string().min(3).max(80).required(),
    body: Joi.string().min(3).max(512).required()
})


router.post('/',(req,res)=>{
    return res.send({data:'Koko Lala'})
})


function validate(instance){

}

function checkAccess(userId,resourceId){
    
}


module.exports = {
    router,
    validate,
    checkAccess
}