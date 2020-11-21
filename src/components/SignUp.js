
import React, {useState} from 'react'



function SignUp() {

    const initialState ={
        Firstname:"",
         Lastname:"", 
         Email:"", 
         Password:"", 
         ConfirmPassword: "", 
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
        {/* <div className = "container">

            <div className = "3-col">

            </div>
            <div className = "6-col"> */}
            <h1>Create Account</h1>
            <label for="fname">First name:</label> <br />
            <input  type="text" id="fname" className="fname" value={value.Firstname} onChange={handleChange} /> <br />
            <label for="lname"> Last name: </label> <br />
            <input  type="text" id="lname" className="lname" value={value.Lastname} onChange={handleChange}/><br />
            <label for= "email">Email:</label><br />
            <input type="email" id="email" className="email" value={value.Email} /><br />
            <label for= "password">Password:</label><br/>
            <input type= "password" id= "password" className= "password" value={value.Password} onChange={handleChange}/><br />
            <label for= "cpassword">Confirm Password:</label><br />
            <input  type= "password" id= "password" className= "password" value={value.ConfirmPassword} onChange={handleChange}/><br/>
            <link add to= "/SignIn"><button>Submit</button> </link>


            
        
            

     </form>
 
   
    </div>
    )
}

export default SignUp
