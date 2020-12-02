import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <div className = "App">
            
            <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">Navbar</span>
                <ul className ="navbar-nav">
                 <Link to= "/"> {" "} <li>Home</li> </Link>
                 <Link to= "/signUp"> {" "} <li>SignUp</li> </Link>
                 <Link to= "/signIn"> {" "} <li>SignIn</li> </Link>
                 <Link to= "/Posts"> {" "} <li>Posts</li> </Link>
                </ul>
            </nav>

        </div>
        
    )
}

export default Navbar

