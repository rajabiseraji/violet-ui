import React from 'react';
import '../assets/scss/App.css';
import Button from '../components/Button';
import Input from '../components/Input';

export default class App extends React.Component {
  state = {
    myText: ''
  };

  testMe = e => {
    console.log(e.target.value);
    this.setState({ myText: e.target.value });
    console.log(this.state.myText);
  };

  validator = () => {
    if (this.state.myText === 'hi') return true;
    else if (this.state.myText === 'bye') return null;
    else return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">به اسنپ‌فود خوش آمدید</h1>
        </header>
        <div className="container">
          <div className="row mt-5">
            <div className="col mt-1">
              <Button className="w-100" color="primary">
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button className="w-100" color="primary" outline>
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button className="w-100" onClick={this.testMe} color="secondary">
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button
                className="w-100"
                onClick={this.testMe}
                disabled
                color="secondary"
                outline
              >
                کلیک کنید
              </Button>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <label className="w-100">سلام</label>
              <Input
                className="w-100"
                onChange={this.testMe}
                valid={this.validator()}
              />
              <label className="w-100">خدافظ</label>
              <Input className="w-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
