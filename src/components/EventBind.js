import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello"
    }
    // Approach 3 - binding in the class constructor 
    this.clickHandler = this.clickHandler.bind(this);
  }
 

  // clickHandler() {
  //   this.setState ({
  //     message: "Goodbye!"
  //   });
  //   console.log(this);
  // }

  // Approach 4, method with arrow function
  clickHandler = () => {
    this.setState ({
      message: "Goodbye"
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* APPROACH 1 - WITH .bind(this) */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* APPROACH 2 - WITH ARROW function return value () 
          This is easier when you have to pass parameters
        */}
        {/* <button onClick={() =>this.clickHandler()}>Click</button> */}
        {/* APROACH 3 - ADD .bind in constructor ---> REACT OFFICIAL APPROACH */}
        <button onClick={this.clickHandler}>Click</button>
        {/* APPROACH 4 - class property   (method with arrow function */}

      </div>
    )
  }
}

export default EventBind
