import React from 'react'

// Styling React with Inline styles
//Use camelCase to avoid confusion and value has to be inside ''
const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
