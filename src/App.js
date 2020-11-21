import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Posts from "./components/Posts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';





function ParentComponent() {
  return (
    <main>
      <Router> 
        <Navbar />
        <Posts />
        <Switch>
          <Route path= "/" component={Home} exact />
          <Route path= "/SignUp" component={SignUp} />
          <Route path= "/SignIn" component={SignIn} />
          
      
         </Switch>
       </Router>
     </main>
    
  )
}

export default ParentComponent;
