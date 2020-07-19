const Category = require('../models/Category');
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    
    const promise = Category.find({});
    promise.then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
   
});



module.exports = router