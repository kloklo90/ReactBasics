import React from 'react'

// To avoid having redundant div outer block, use React.Fragment which wont appear in DOM
function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>FragmentDemo</h1>
      <p>This describes the fragment demo element</p>
    </React.Fragment>
  )
}

export default FragmentDemo
