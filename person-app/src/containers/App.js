import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit'; 
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props); 
    console.log('App.js constructor');
    this.state = { 
      persons: [
        { id: '123' , name: 'Max', age: 28 }, 
        { id: '1234' , name: 'Manu', age: 50 }, 
        { id: 'aqad' , name: 'Steph', age: 20}
      ], 
      showPersons: false
    }
  }; 

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state; 
  }


  deletePersonHandler = (personIndex) => {
    // Copy the array contents using slice() with no argument
    let persons = this.state.persons.slice();

    // Alternatively, can do the ... aproach
    persons = [...this.state.persons];
    
    // Remove this element from the array. Note array is by reference
    persons.splice(personIndex, 1); 

    // Update the original array
    this.setState({persons: persons}); 
  };

  componentDidMount() {
    console.log('App.js componentDidMount'); 
  }

  nameChangeHandler = (event, id) => {
    // Need to find the person with the matching id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Extract the single person object by copy, not reference
    // There are 2 ways
    let person = {
      ...this.state.persons[personIndex]
    };
    person = Object.assign({}, this.state.persons[personIndex]); 

    // Update the persons name directly since we have a copy
    person.name = event.target.value;

    // Copy the array via copy
    const persons = [...this.state.persons];

    // Update the new person's name
    persons[personIndex] = person;

    // Update the original state array
    this.setState( {persons: persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons; 
    this.setState({showPersons: !doesShow});
  }
  
  render() {    
    
    console.log('App.js render'); 

    // Conditional statement to display person content with iterating over array objects
    let persons = null; 
    if (this.state.showPersons) {
      persons = (
        <div>

          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />

        </div>
      );
    }


    return (
      
      <div className="App"> 
        <Cockpit
          title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}
        />

        {persons}
      </div>
      
    );
  }
}

export default App; 