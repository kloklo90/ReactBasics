import React, { Component } from 'react'

/** React components that catch JS error in their child componentn tree, log erros and 
 * display fall back UI. Needs to implement getDerivedStatefromerror or componentdidcatch method
 * Catches error rendering, lifecycle method and constructors of the whole tree elements
 * but not in event handler --- in this use regular try-catch methods
 */
class ErrorBoundary extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  // Method used to log the errors
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
