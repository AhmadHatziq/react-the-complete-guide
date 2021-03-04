import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register'; 
import { BrowserRouter, Route } from 'react-router-dom'; 

function App() {
  const [name, setName] = useState('');

  useEffect( () => {
      ( 
          async () => {
              const response = await fetch('http://localhost:8000/api/user', {
              method: 'GET', 
              headers: {'Content-Type': 'application/json'},
              credentials: 'include'
      });

          const content = await response.json();

          setName(content.name); 
          }
      )();

  }); 

  // When we logout, the name is set to ''. 
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name = {name} setName = {setName}/>
        <main className="form-signin">
          <Route path = "/" exact component = { () => <Home name={name}/>}/>
          <Route path = "/login" component = { () => <Login setName = {setName}/>}/>
          <Route path = "/register" component = {Register}/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
