import React from 'react'
import reactDom from 'react-dom'

/**** Used for Modal, Portal or Popup
 * Check out portal demo on here
 * https://codesandbox.io/s/00254q4n6p
 * 
 * Event Bubbling where portal returns back to main DOM eg. here
 * https://codepen.io/gaearon/pen/jGBWpE
*/
function PortalDemo() {
  return reactDom.createPortal (
    <h1>
      Portals demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
