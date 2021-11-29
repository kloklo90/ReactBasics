import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       name: 'Khady'
    }
    console.log('LifecycleB constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB this.getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentdid mound");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshot before update");
    return null;
  }
  
  componentDidUpdate (){
    console.log("LifecycleB component did update");
  }

  render() {
    console.log("LifecycleB render");
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB
