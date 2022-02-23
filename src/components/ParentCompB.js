import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentCompB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Khady'
    }
  }
  
  componentDidMount() {
    /* This helps you see that parent and reg components rerender every 2 secs but 
      Pure component does not.
      Reg component does not implement shouldComponentUpdate method. It is always true.
      Pure component has this method with a shallow props and state comparison only if 
      there is a difference we have a rerender */
    setInterval(() => {
      this.setState({
        name: 'Khady'
      })
    }, 2000);
  }

  render() {
    console.log("***********PARENT COMPONENT ************");
    return (
      <div>
       Parent component
       {/* PURECOMPONENTS CLASSES */}
       {/* <RegComp name={this.state.name} />
       <PureComp name={this.state.name} />  */}

       {/* MEMOCOMPONENTS AKA Pure performance boost for components */}
       <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentCompB
