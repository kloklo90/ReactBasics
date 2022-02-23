import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styles from './appStyles.module.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ErrorBoundary from './components/ErrorBoundary';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import PortalDemo from './components/PortalDemo';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import ParentCompB from './components/ParentCompB';
import RefsDemo from './components/RefsDemo';
import RenderCounter from './components/RenderCounter';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext';
//import Autocomplete from './components/Autocomplete'
import Code from './components/Code';
import Autocomplete from './components/Autocomplete';
// App file for Advanced React course content
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Code /> */}
        <Autocomplete 
        suggestions={[
          "Namibia",
          "Cambodia",
          "Ecuador",
          "New Zealand",
          "Brazil",
          "Norway",
          "Benin",
          "Reunion",
          "Slovenia",
          "Switzerland"
        ]}
        />
        {/* <FragmentDemo/> */}
        {/* <Table /> */}
        {/* Performance boost by using PureComponents Classes because they don't regularly rerender */}
        {/* <ParentCompB /> */}
        {/* MemoComponents is the same for components as Purecomponents Classes */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalDemo /> */}

        {/* ERROR BOUNDARIES to avoid breaking the whole app on one error */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}

        {/*  HIGH ORDER COMPONENT */}
        {/* To share code between classes */}
        {/* <ClickCounter />
        <HoverCounter name="Khady" /> */}

        {/* RENDER PROPS */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
        {/* <User render={ (isLoggedIn) => isLoggedIn ? 'Khady' : 'Guest'}/>
        <RenderCounter render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} />
        <RenderCounter render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} /> */}

        {/* CONTEXT */}
        <ComponentC />
        <UserProvider value="Khady">
          <ComponentC />
        </UserProvider>

      </div>
    )
  }
}

export default App
