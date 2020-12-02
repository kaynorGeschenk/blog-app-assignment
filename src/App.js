import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Posts from "./components/Posts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';






function App() {
  return (
    <div>
      <main>
       <Router> 
        <Navbar />
        
        <Switch>
          <Route path= "/" component={Home} exact />
          <Route path= "/SignUp" component={SignUp} />
          <Route path= "/SignIn" component={SignIn} />
          <Route path= "/Posts" component={Posts} />
          
      
        </Switch>
       </Router>
      </main>
    

    </div>
    
  )
}

export default App;
