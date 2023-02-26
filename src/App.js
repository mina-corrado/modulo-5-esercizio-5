import React from 'react';
import './App.css';
import { BookList } from './BookList';
import { MyBadge } from './MyBadge';
import { MyNavbar } from './MyNavbar';
import scifiBooks from './scifi.json';
import { SingleBook } from './SingleBook';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      query: ''
    };
  }
  cambiaQuery = (newQuery) => {
    console.log("app ", newQuery);
    this.setState({query: newQuery});
  }
  render () {
    const query = this.state.query;
    return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MyNavbar query={query} cambiaQuery={this.cambiaQuery}></MyNavbar>
      <MyBadge text="Testo Badge" color="primary"></MyBadge>
      <SingleBook book={scifiBooks[0]}></SingleBook>
      <BookList books={scifiBooks} query={query}></BookList>
    </div>

    )
  }
}

export default App;
