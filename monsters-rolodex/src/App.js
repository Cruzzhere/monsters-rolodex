import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/Card-list/card-list-component'
import { SearchBox} from './components/searchbox/searchbox.component.jsx'

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
  handleChange=(e)=> {
     this.setState({ searchFeild: e.target.value }) // by using this arrow function our java script compiler will declare all the methods executing with the class method
    }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
     )
    return (
      <div className="App">
        <h1>Monsters RoloDex</h1>
        {/* <header className="App-header"> */}
          <SearchBox placeholder='Search Monsters' handleChange= {this.handleChange} />
          <CardList monsters={ filteredMonsters }/> 
          {/* //callthe cardlist uding card list component */}
        {/* </header>     */}
    </div>
    )
  }
}

export default App;

// if our page is not working we must upgrade our packages

// use command "yarn install"
