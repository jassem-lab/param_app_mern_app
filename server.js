const express = require("express");
const app = express();
const connectDB = require("./database/db");
const cors = require("cors");
const morgan = require("morgan");
const authCtrl = require("./controllers/authCtrl");

// Connection to Database

connectDB();

// Middleware

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authCtrl);

// Routes ( API )
// Routers Tests :
app.get("/", (req, res) => {
  // res.send('hello from server !!')
});

// Production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

// Start Listening

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port} `));
