const mongoose = require('mongoose')


const categorySchema = mongoose.Schema({

  name : {
    type : String , 
    required : true , 
    trim : true , 
    unique : true 
  }

}, {timestamp : true })


module.exports = mongoose.model('category', categorySchema)