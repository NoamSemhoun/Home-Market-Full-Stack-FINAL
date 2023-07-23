const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    return res.send({data:'Koko Lala'})
})


module.exports = router