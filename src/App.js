import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

// App file for Advanced React course content
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FragmentDemo/> */}
        <Table />
      </div>
    )
  }
}

export default App
