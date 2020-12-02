import React, {useState} from 'react'

function SignIn() {

        const initialState = {Email:"", Password:"",};

       const[value, setValue] = useState(initialState);

       const handleChange= (e) => {
        const {id, value} = e.target;
         setValue((prevState)=> ({
            ...prevState, 
            [id]: value, }));

     };

      const handleSubmit = (e) => {
        setValue(initialState);
        e.preventDefault();
    };

    
    return(
        <div className= 'container'>
            <form onSubmit={handleSubmit}>
                <div className = 'row'>
               
        <div className= 'col-md-3'></div>
        <div className= 'col-md-6'>
        <h1>Sign In!</h1>
         <div>
            <label for= "email">Email:</label><br />
            <input type="email" id="Email" className="email" value={value.Email} onChange={handleChange} /><br />
            <label for= "password">Password:</label><br/>
            <input type= "password" id= "Password" className= "password" value={value.Password} onChange={handleChange} /><br />
            <input type= 'Submit' />
            
         </div>
        </div>
        <div className= 'col-md-3'> </div>
        
                </div>
    </form>
        </div>
    
    )
}

export default SignIn
