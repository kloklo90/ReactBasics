import React from "react";

const Hello = () => {
  // JSX format
  // return(
  //   <div>
  //     <h1>Hello Khadylo</h1>
  //   </div>
  // )
  return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Khady lo')
  );
}

export default Hello