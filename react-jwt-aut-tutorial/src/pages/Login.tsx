import React, { useState, SyntheticEvent } from 'react'; 
import { Redirect } from 'react-router-dom'; 

const Login = (props: { setName: (name: string) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false); 


    const submit = async (event: SyntheticEvent) => {
        event.preventDefault();
        
        // Send login details to API
        let jsonObj = {
            email, password
        }; 
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', // To get cookie from backend
            body: JSON.stringify(jsonObj)
        });

        const content = await response.json();
        props.setName(content.name); 

        // Set redirect to true
        setRedirect(true); 

    }; 

    
    if (redirect === true) {
        return <Redirect to = "/" />;
    }

    return (
        <div>
            <form onSubmit = {submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input 
                    type="email" id="inputEmail" className="form-control" placeholder="Email address" 
                    required autoFocus
                    onChange = { (event) => setEmail(event.target.value)}
                />
                <input 
                    type="password" id="inputPassword" className="form-control" placeholder="Password" 
                    required
                    onChange = { (event) => setPassword(event.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    ); 
}; 

export default Login;
