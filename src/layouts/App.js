import React, { Component } from 'react';
import '../assets/scss/App.css';
import Button from '../components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div class="col-3 p-1">
              <Button className="w-100" size="lg" color="primary">
                کلیک کنید
              </Button>
            </div>
            <div class="col-3 p-1">
              <Button className="w-100" size="lg" color="primary" outline>
                کلیک کنید
              </Button>
            </div>
            <div class="col-3 p-1">
              <Button className="w-100" size="lg" color="secondary">
                کلیک کنید
              </Button>
            </div>
            <div class="col-3 p-1">
              <Button className="w-100" size="lg" color="secondary" outline>
                کلیک کنید
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
