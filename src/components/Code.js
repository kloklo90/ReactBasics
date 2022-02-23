import React, { Component } from 'react';
import axios from 'axios';
import lodash from 'lodash';

const ITEMS_API_URL = 'https://jsonplaceholder.typicode.com/users'; 
const DEBOUNCE_DELAY = 500;

class Code extends Component {
  state = {
    persons: []
  }
  
    componentDidMount() {
    axios.get(ITEMS_API_URL)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return  <ul>
    {
      this.state.persons
        .map(person =>
          <li key={person.id}>{person.name}</li>
        )
    }
  </ul>
  }
}

export default Code;
