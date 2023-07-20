import React, { Component } from 'react'

class TestTodo extends Component {
  render() {
    return (
      <div>
        <h1>sample todo</h1>
        <h2>{this.props.myString}</h2>
      </div>
    );
  }
}
export default TestTodo;
