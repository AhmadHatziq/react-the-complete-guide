import React, {SyntheticEvent, useState} from 'react';
import { Redirect } from 'react-router-dom'; 

const Register = () => {
    // Declare vars for storing registration details
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false); 

    // Create a function to handle form submission
    const submit = async (event: SyntheticEvent) => {

        // For debugging. Need to prevent page refresh to see details in console
        /*
        event.preventDefault();
        console.log({
            name, email, password
        }); 
        */

       event.preventDefault();
        let jsonObj = {
            name, email, password
        }; 

        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonObj)
        });

        setRedirect(true); 

        // For debugging
        /*
        event.preventDefault();
        const content = await response.json(); 
        console.log(content); 
        */

       
    };

    if (redirect === true) {
        return <Redirect to = "/login" />;
    }
    

    return ( 
        <div>
            <h1>Register</h1>

            <form onSubmit = {submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <input 
                    className="form-control" placeholder="Name" required autoFocus
                    onChange={ (event) => setName(event.target.value)}
                />
                <input 
                    type="email" id="inputEmail" className="form-control" placeholder="Email address" 
                    required autoFocus
                    onChange={ (event) => setEmail(event.target.value)}
                    />
                <input 
                    type="password" id="inputPassword" className="form-control" placeholder="Password" 
                    required
                    onChange={ (event) => setPassword(event.target.value)}
                    />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit Registration</button>
            </form>

        </div>
    );
}; 

export default Register; 