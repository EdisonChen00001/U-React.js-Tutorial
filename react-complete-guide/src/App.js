import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      {name:'Max', age:23},
      {name:'Tom', age:22},
      {name:'Jerry', age:36},
    ] 
  }

  switchNameHandler = () =>{
    console.log('click');
  }


  render() {
    return (
      <div className="App">
       <h1>Hi I am a React</h1>
       <button onClick ={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>

      </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is test Tutorial for React.js'));
  }
}

export default App;
