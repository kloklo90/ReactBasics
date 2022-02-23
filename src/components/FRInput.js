import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

const FRInput = React.forwardRef((props, ref) => {
    return(
      <div>
        {/* Child element is forwarding the reference. Very rare but is used when using library */}
        <input type="text" ref={ref}/>
      </div>
    )
  }
) 

export default FRInput
