const mongoose = require('mongoose') ; 


const connectDB = async () => {
  try {
    
    await mongoose.connect('mongodb+srv://jassemgaaloul:20550248@cluster0.5uciq.mongodb.net/restau?retryWrites=true&w=majority', {
      useNewUrlParser : true , 
      useUnifiedTopology : true 
    }) ; 
    console.log('Database connection success ! ');


  } catch (err) {
    console.log(err);
  }
}



module.exports = connectDB ; 