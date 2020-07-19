// const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const fs = require('fs');
// const multer = require('multer');
// const upload = multer({dest:'/uploads/'})




const ProductSchema = new Schema({
    category_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    productImage: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },




});



module.exports = mongoose.model('product', ProductSchema);