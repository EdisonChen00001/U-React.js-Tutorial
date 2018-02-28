import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi I am a React</h1>
        <Person/>
      </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is test Tutorial for React.js'));
  }
}

export default App;
