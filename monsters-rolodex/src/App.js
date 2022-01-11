import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/Card-list/card-list-component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
     searchFeild:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')//fetch from the url make an api request
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
     )
    return (
      <div className="App">
        <header className="App-header">
          <input type='search' placeholder='Search Monsters' onChange={e => this.setState({ searchFeild: e.target.value })}/>
          <CardList monsters={ filteredMonsters }/> 
          {/* //callthe cardlist uding card list component */}
        </header>    
    </div>
    )
  }
}

export default App;
