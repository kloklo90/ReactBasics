import React from 'react';
import Person from './Person';

// List rendering with React using the map method 
function NameList() {
  //Using index value as a key for list rendering
  // This might create issues in some UI rendering cases
  // Adding item at start still add that new items at the end of the list
  // Only use when your items do not have a unique id, and if your list 
  // is static no modifications and you will never re-order or filter
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const nameList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2>);

  // Using id value as a key for list rendering
  // Will render a warning error Each child in a list should have a unique key prop
  // Key prop is not available in the child component. You need to pass it as a different prop
  // Key prop is reserved. React used the key to match the original tree items with the subsiquent tree
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ];
  const personList = persons.map(person => <Person key={person.id} person={person}/>);
  
  return <div>{nameList}</div>
}

export default NameList;


