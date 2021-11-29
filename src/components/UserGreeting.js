import React, { Component } from 'react'


// Taking a look at Conditional Rendering which in React is very
// similar to Javascript. There are 4 options:
// if/else, Element Variables, Ternary conidtional operator and Short circuit operator
class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
  render() {

    return this.state.isLoggedIn ? (
      <div>Welcome Khady</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Khady</div>
    // }else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // IF ELSE DON'T WORK INSIDE THE JSX that's why we have if statement outside the return statement
    // if (this.state.isLoggedIn) {
    //   return(
    //     <div>Welcome Khady</div>
    //   )
    // } else {
    //   return(
    //     <div>Welcome Guest</div>
    //   )
    // }
    
  }
}

export default UserGreeting
