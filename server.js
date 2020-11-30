const express = require("express");
const app = express();
const connectDB = require("./database/db");

// Connection to Database

connectDB();



// Routes ( API )



// Production

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });} 


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port} `));
