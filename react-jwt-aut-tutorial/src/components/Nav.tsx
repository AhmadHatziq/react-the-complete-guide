import React from 'react'; 
import { Link } from 'react-router-dom'; 

// When we logout, need to tell the other components. That is what setName is for. 
const Nav = (props: {name: string, setName: (name: string) => void}) => {

    // Create a function to handle logout
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        });

        props.setName('');
    }; 

    let menu; 
    if (props.name === '') {
        menu = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to = "/login" className="nav-link" href="#">Login <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to = "/register" className="nav-link" href="#">Register <span className="sr-only"></span></Link>
                </li>
            </ul>
        ); 
    } else { // name exists. Need to display logout
        menu = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link 
                    to = "/login" 
                    className="nav-link" href="#"
                    onClick = {logout}
                >
                    LOGOUT 
                    <span className="sr-only"></span>
                </Link>
            </li>
        </ul>
        ); 
    }

    return( 
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <Link to = "/" className="navbar-brand" href="#">Home</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {menu}
                </div>
            </nav>
        </div>
    );
};

export default Nav; 