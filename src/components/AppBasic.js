import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Form from './components/Form';
import LifecycleA from './components/LifecycleA';


 /* This file goes over the Basic Knowledge required for React.
 Copy content and replace App.js content to go over these Basics. 
 Replace AppBasics word occurrence with App only */
class AppBasics extends Component {
 render() {
  return (
    // <div className="App">
    <div>
      {/* Lifecycles */}
      <LifecycleA />

      {/* FORMS */}
      {/* <Form /> */}

      {/* STYLING WITH REACT - 3 METHODS Regular stylesheet, Inline and Modules */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* the css applies to all child component */}
      {/* <h1 className='error'>Error</h1> */}
      {/* These classes are locally scoped by default.  */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* LIST RENDERING IN REACT */}
      {/* <NameList /> */}

      {/* <UserGreeting /> */}
     {/* PARENT/CHILD COMMUNICATION */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* ONCLICK PROPRERTIES */}
      {/* <FunctionClick />
      <ClassClick /> */}

      {/* COUNTER */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* FUNCTION COMPONENT */}
      {/* <Greet name="Malaika" heroName="Angel">
        <p>This is children props</p>
      </Greet>
      <Greet name="David" heroName="Tening Banany">
        <button>Action</button>
      </Greet>
      <Greet name="Khady" heroName="Mom"/> */}

      {/* CLASS COMPONENT */}  
      {/* <Welcome name="Malaika" heroName="Angel"/>
      <Welcome name="David" heroName="Tening Banany"/>
      <Welcome name="Khady" heroName="Mom"/> */}
      
      {/* <Hello/> */}
    </div>
  );
 }
}

export default AppBasics;


// <header className="App-header"> 
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Hello world
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> 