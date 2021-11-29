import React from 'react'

function Columns() {
  const items =[];
  return (
    <React.Fragment>
      {
        items.map( item => (
          // As of 2018 only the key attribute can be passed into a React.fragment tag
          <React.Fragment key={item.id}> 
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Khady</td>
    </React.Fragment>
  )
}

export default Columns
