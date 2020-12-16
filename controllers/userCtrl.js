const Users = require("../modals/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body ;

      const user = await Users.findOne({email})
      if(user) return res.status(400).json({msg : "The email already exists. "})
      if(password.length < 6 )
      return res.status(400).json({msg : "Password is at least 6 characters long. "})


      // Password Encryption 
      const passwordHash = await bcrypt.hash(password , 10 )
      const newUser = new Users({
        username, email , password : passwordHash 
      })
      // Save to DataBase ( mngodb() )
      await newUser.save()
      // Create Json Web Token to Authentification 
      const accessToken = createAccessToken({id : newUser._id})
      const refreshToken = createRefreshToken({id : newUser._id})

      res.cookie('refreshToken' , refreshToken , {
        httpOnly : true , 
        path : '/user/refresh_token' , 
        maxAge : 7*24*60*60*1000 // 7 Days 
      })

      res.json({accessToken})

      

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login : async (req, res) => {
    try {
      const {email , password } = req.body ; 

      const user = await Users.findOne({email})
      if(!user) return res.status(400).json({msg : "User does not exist. "})
      const isMatch = await bcrypt.compare(password , user.password )
      if(!isMatch) return res.status(400).json({msg : "Incorrect Password. "})

      //If login Access 
      // Create access Token and Refresh the token (refreshToken)

      const accessToken = createAccessToken({id : user._id})
      const refreshToken = createAccessToken({id : user._id})
      res.cookie('refreshToken', refreshToken , {
        httpOnly : true , 
        path : '/user/refresh_token' , 
        maxAge : 7*24*60*60*1000 // 7 Days 
      })
      res.json({accessToken})
    } catch (err) {
      return res.status(500).json({msg : err.message})
    }
  }, 
  logout : async(req, res) =>  {
    try {
      res.clearCookie('refreshToken', {
        path : '/user/refresh_token'
      })
      return res.json({msg : "Loggout Out"})
    } catch (err) {
      return res.status(500).json({msg : err.message})
    }
  }, 
  refreshToken : async(req , res) => {
    try {
      const rf_token = req.cookies.refreshToken ; 
      if(!rf_token) return res.status(400).json({msg : "Please Login or Register"})
      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(400).json({msg : "Please Login or Register"})
        const accessToken = createAccessToken({id : user.id})
        res.json({accessToken})
      })
      
    } catch (err) {
      return res.status(500).json({msg : err.message})
    }
  },
  getUser : async(req , res) => {
    try {
      const user = await Users.findById(req.user.id).select('-password')
      if (!user) return res.status(400).json({msg : "User does not exist. "})
    } catch (err) {
      return res.status(500).json({msg : err.message})
    }
  }, 
  addCart : async(req ,res) => {
    try {
      const user = await Users.findById(req.user.id)
      if(!user) return res.status(400).json({msg : "User does not exist. "})
      await Users.findByIdAndUpdate({_id : req.user.id},{
        cart : req.body.cart
      })
      return res.json({msg : "Added to Cart. "})
    } catch (err) {
      return res.status(500).json({msg : err.message})
    }
  }
};


const createAccessToken = (user) =>{
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl

