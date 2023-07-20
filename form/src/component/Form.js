import React, { Component } from 'react'

class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
    Qualification: "",
    Age: ""
  }
  onHandleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  onSubmit = () =>{
    console.log(this.state);
    alert("Success")
  }
  render() {
    return (
      <form className='formtxt'>
        <h1>Form</h1>
        FirstName:
        <input className='inputfield' type='text' name='firstName' value={this.state.firstName} onChange={this.onHandleChange}/><br/>
        LastName:
        <input className='inputfield' type='text' name='lastName' value={this.state.lastName} onChange={this.onHandleChange}/><br/>
        Qualification:
        <input className='inputfield' type='text' name='Qualification' value={this.state.Qualification} onChange={this.onHandleChange}/><br/>
        Age:
        <input className='inputfield' type='text' name='Age' value={this.state.Age} onChange={this.onHandleChange}/><br/>

        <button className='btnsubmit' type='button' onClick={this.onSubmit}>Submit</button>
      </form>
    
    )
  }
}
export default Forms;