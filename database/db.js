const mongoose = require('mongoose') ; 
require('dotenv').config()

const URI = process.env.MONGO_URL

const connectDB = async () => {
  try {
    
    await mongoose.connect(URI, {
      useNewUrlParser : true , 
      useUnifiedTopology : true 
    }) ; 
    console.log('Database connection success ! ');


  } catch (err) {
    console.log(err);
  }
}



module.exports = connectDB ; 