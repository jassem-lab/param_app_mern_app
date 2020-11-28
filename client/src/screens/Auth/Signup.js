import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'


const   Signup = ()  => {

const [newUser, setNewUser] = useState({
  username : '' , 
  email : '' , 
  password : '' ,
  successMsg : false , 
  errorMsg : false ,
  loading : false 
})

  const handleChange = e => {
    e.preventDefault()

    setNewUser({
      ...newUser , 
      [e.target.name] : e.target.value
    })

    
  }

  const {username, email , password , successMsg , errorMsg , loading } = newUser; 

  const ShowSignupForm = () => (
    
    <form action="" className="signup__form">
        
     
      
      <h2>Sign Up</h2>
      <br/>
      <label for="name">Name</label>
      <br/>
      <input id="name" type="text" value={username} name="username" onChange={handleChange} />
      <br/>
      <label for="email">Email</label>
      <br/>
      <input id="email" type="email" name="email" value={email}  onChange={handleChange}/>
      <br/>
      <label for="password">Password</label>
      <br/>
      <input id="password" type="password" name="password" value={password}  onChange={handleChange}/>
      <br/>
      <input id="button" type="submit" value="Sign Up"/>
      <br/>
      <Link to="/signin" style={{textDecoration:'none'}} className="signup__resetpw">Have an account ? Log in </Link>
    </form>       
   
      
  )
  return (<div className="">
      {ShowSignupForm()}
      </div>
     )
    
    
  
}

export default Signup
