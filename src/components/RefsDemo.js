import React, { Component } from 'react'


/** 
 * Refs are a function provided by React to access the DOM element and the React 
 * element that you might have created on your own. They are used in cases where 
 * we want to change the value of a child component, without making use of props and all.
 * To deal with input forms modern approach
 * You can create a ref with React's, createRef method or
 * Call back Ref is old fashion
*/
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // 3 Steps to Call Back Ref method - 
    // Create property, 
    // then create a method that assign the prop as a dom element
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    }
  }

  componentDidMount() {
    //Check if not null first
    if (this.cbRef) {
      this.cbRef.focus();
    }

    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCbRef}/>

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
