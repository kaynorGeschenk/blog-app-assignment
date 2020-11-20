
import React, {useState} from 'react'

function SignUp() {

    const initialState ={
        Firstname:"", Lastname:"", Email:"", Password:"", ConfirmPassword: "", 
    }
    const[value, setValue] = useState(initialState);

    const handleChange= (e) => {
        const {id, value} = e.target; setValue((prevState)=> ({prevState, [id]: value, }));

    };

    const handleSubmit = (e) => {
        setValue()
        e.preventDefault();

    };
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <label for="fname">First name:</label> <br />
            <input  type="text" id="fname" className="fname" value={value} onChange={handleChange} /> <br />
            <label for="lname"> Last name: </label> <br />
            <input  type="text" id="lname" className="lname" value={value} onChange={handleChange}/><br />
            <label for= "email">Email:</label><br />
            <input type="email" id="email" className="email" value={value} />
            <label for= "password">Password:</label><br/>
            <input type= "password" id= "password" className= "password" value={value} onChange={handleChange}/><br />
            <label for= "cpassword">Confirm Password:</label><br />
            <input  type= "password" id= "password" className= "password" value={value} onChange={handleChange}/><br/>
            <button>Submit</button>

        </form>
 
   
        </div>
    )
}

export default SignUp
