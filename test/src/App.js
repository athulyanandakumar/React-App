import React, { Component } from "react";
import './App.css';
import TestTodo from "./component/TestTodo";

class App extends Component{
  state = {
    myString: "Hello...",
    myString1: "Hello world"
  };

  handleChange = () =>{
    this.setState({
      myString: "Hi.."
    });
  };
  
  render(){
    return (
      <div className="App">
        <h1>{this.state.myString}</h1>
        <h1>{this.state.myString1}</h1>
        <button onClick={this.handleChange}>Change Text</button>
        <TestTodo myString ={this.state.myString}/>
      </div>
    );
  }
}

export default App;
