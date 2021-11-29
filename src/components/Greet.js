import React from 'react'

// OLD JS syntax
// function Greet() {
//   return <h1>Hello Khady</h1>;
// }

//ES6 syntax
const Greet = (props) => {
  const {name, heroName} = props;
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}


//Parameter destructuring
// const Greet = ({name, heroName}) => {
//   return (
//     <div>
//       <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>
//   )
// }
export default Greet