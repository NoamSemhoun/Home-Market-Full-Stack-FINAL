const express = require('express');
const Joi = require('joi');
const router = express.Router();

const validationScheme = Joi.object({

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