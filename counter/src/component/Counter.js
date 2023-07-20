import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';


class Counter extends Component {
    state = {
        counter: 0
    }
    onIncrement = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }
    onDecrement = () =>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h2>{this.state.counter}</h2>
        <button className='btnincre' onClick={this.onIncrement}>+</button>
        <button className='btndecre' onClick={this.onDecrement}>-</button>
        
      </div>
    )
  }
}
export default Counter;