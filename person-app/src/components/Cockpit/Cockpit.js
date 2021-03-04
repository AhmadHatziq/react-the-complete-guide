import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        // HTTP Request...

        setTimeout( () => {
            alert('Saved data to the cloud!'); 
        }, 1000 )
    }, [] );

    // Assign button CSS conditionally
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red; 
    };

    // Assign color depending on persons length for <p> tag
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); 
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }; 

    return (
        <div className = {classes.Cockpit}> 
            <h1>Hi I am a {props.title} App!!</h1>
            <p className = {assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className = {btnClass}
                onClick = { props.clicked }>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit; 