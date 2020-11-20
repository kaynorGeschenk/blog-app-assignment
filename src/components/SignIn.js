
import React, {useState} from 'react'; 

function SignIn() {

const initialState = {Email:"", Password:"",}

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
    <form onSubmit={handleSubmit}>
        <h1>Sign In!</h1>
        <div>
            <label for= "email">Email:</label><br />
            <input type="email" id="email" className="email" value={value} onChange={handleChange} /><br />
            <label for= "password">Password:</label><br/>
            <input type= "password" id= "password" className= "password" value={value} onChange={handleChange} /><br />
            <button>Submit</button>


        </div>
    </form>
    )
};

export default SignIn;