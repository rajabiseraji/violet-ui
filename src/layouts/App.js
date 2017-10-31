import React, { Component } from "react";
import "../assets/scss/App.css";
// import "../assets/scss/bootstrap/bootstrap.css";
import Button from '../components/Button';

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
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
