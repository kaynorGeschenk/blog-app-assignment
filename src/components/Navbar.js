import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <div className = "App">
            <nav>
                <ul>
            <Link to= "/"> {" "} <li>Home</li> </Link>
            <Link to= "/signUp"> {" "} <li>SignUp</li> </Link>
            <Link to= "/signIn"> {" "} <li>SignIn</li> </Link>
                </ul>
            </nav>

        </div>
        // <div className = "container">
        //     <div className= "row">

            
            
        //   </div>


         

        // </div>
        
        
    )
}

export default Navbar
