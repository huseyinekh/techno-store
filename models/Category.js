const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let id = 1;



const CategorySchema = new Schema({
    name:{
      type: String,
       required:true,   
    }
});

module.exports=mongoose.model('category',CategorySchema);