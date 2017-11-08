import React from 'react';
import '../assets/scss/App.css';
import Button from '../components/Button';
import Input from '../components/Input';

export default class App extends React.Component {
  state = {
    input1_text: '',
    input2_text: '',
    clicked: false
  };

  validator = input => {
    if (input.indexOf('hi') !== -1) return true;
    else if (input.indexOf('bye') !== -1) return null;
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
                onChange={e => this.setState({ input1_text: e.target.value })}
                valid={this.validator(this.state.input1_text)}
              />
            </div>
            <div className="row">
              <label className="w-100">سلام</label>
              <Input
                ref="some"
                className="w-100"
                onChange={e => this.setState({ input2_text: e.target.value })}
                valid={this.validator(this.state.input2_text)}
              />
              <Input type="select" className="mt-2">
                <option vlaue="no way">سلام بر شما</option>
                <option vlaue="yes way">وای بر شما</option>
              </Input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
