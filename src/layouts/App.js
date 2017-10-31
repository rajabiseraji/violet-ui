import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/App.css";
import SearchBar from '../components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container mx-2">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
