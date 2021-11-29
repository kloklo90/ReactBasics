import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

// This class displays the order in which methods are run in a React class component
// See console log results below
class LifecycleA extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       name: 'Khady'
    }
    console.log('LifecycleA constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA this.getDerivedStateFromProps");
    return null;
  }
  // Rare to use
  componentDidMount() {
    console.log("LifecycleA componentdid mound");
  }
  // Rare to use
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }
  // Rare to use
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshot before update");
    return null;

  }
  // This and render method are the most commonly used update methods, 
  // the other two are very rarely used
  componentDidUpdate (){
    console.log("LifecycleA component did update");
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    )
  }

  /*LifecycleA constructor
  LifecycleA.js:15 LifecycleA this.getDerivedStateFromProps
  LifecycleA.js:24 LifecycleA render
  LifecycleB.js:10 LifecycleB constructor
  LifecycleB.js:14 LifecycleB this.getDerivedStateFromProps
  LifecycleB.js:23 LifecycleB render
  LifecycleB.js:19 LifecycleB componentdid mound
  LifecycleA.js:20 LifecycleA componentdid mound
  */
}

export default LifecycleA
