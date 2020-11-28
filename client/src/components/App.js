import React from 'react';
import Header from './Header/Header'
import {
  Switch , 
  Route
} from 'react-router-dom' ; 
import Home from '../screens/Home/Home'
import About from '../screens/About/About'
import Products from '../screens/Products/Products'
import Signin from '../screens/Auth/Signin'
import Signup from '../screens/Auth/Signup'
import NotFound from '../screens/NotFound/NotFound' 



function App() {
  return (
    <>
     <Header />
      <main>
        <Switch>
          <Route path ="/" exact component={Home}  />
          <Route path ="/products" exact component={Products}  />
          <Route path ="/about" exact component={About}  />
          <Route path ="/signin" exact component={Signin}  />
          <Route path ="/signup" exact component={Signup}  />
          <Route path ="*"  component={NotFound} /> 
        </Switch>
      </main>
    </>
  );
}

export default App;
