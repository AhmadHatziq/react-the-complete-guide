import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Manu', age: 50 }, 
      { name: 'Steph', age: 20}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 }, 
        { name: 'newManu', age: 50 }, 
        { name: 'newSteph', age: 1000}
      ]
     })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 50 }, 
        { name: 'Steph', age: 1000}
      ]
     })
  };
  
  render() {     
    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1x solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    }; 
    
    return (
      <div className="App"> 
        <h1>Hi I am a React App!!</h1>
        <p>This is really working!</p>
        
        <button 
          style = {style} // Substitutes the style constant into here
          onClick = { () => this.switchNameHandler('NameFromButton') }>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
        ></Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'newName')}
          changed = {this.nameChangeHandler}
          > My Hobbies include Racing.</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App; // Export this class