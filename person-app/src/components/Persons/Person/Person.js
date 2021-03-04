import React, { Component } from 'react';

import './Person.css' ; 

class Person extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("Persons.js getDerivedStateFromProps");
        return state; 
    }

    // Used to compare nextProps with currentProps and currentState & nextState
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate"); 
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Person.js snapshot before update'); 
        return {message: 'Snapshot!'}; 
    }

    componentDidUpdate(prevProps, prevState, snapeshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapeshot);
    }

    render() {
        console.log('Person.js rendering');
        return (
            <div className = 'Person'>
                <p onClick = {this.props.click}> I'm {this.props.name}  and I am { this.props.age }  years old. </p>
                <p> {this.props.children} </p>
                <input type = 'text' onChange = {this.props.changed} value = {this.props.name}></input>
            </div>
        )     
    }
}


export default Person;