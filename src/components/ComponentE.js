import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {
/*** Limitations to context type - 
 * Only works with classes
 * Can only subscribe to one context with context type so then you will need 
 * a userContext type of class
 * */ 

  //ALTERNATIVE
  static contextType = UserContext;
  render() {
    return (
      
      <div>
        {/* // Context type property */}
        Component E context { this.context }
        <ComponentF />
      </div>
    )
  }
}
// OR ALTERNATIVE ABOVE ComponentE.contextType = UserContext
export default ComponentE
