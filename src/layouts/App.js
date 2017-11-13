import React from 'react';
import '../assets/scss/App.css';
import Button from '../components/Button';
import Input from '../components/Input';
import AdvancedSelect from '../components/AdvancedSelect';
import CheckBox from '../components/Checkbox';
import 'react-select/dist/react-select.css';

export default class App extends React.Component {
  state = {
    input1_text: '',
    input2_text: '',
    clicked: false,
    val: ''
  };

  validator = input => {
    if (input.indexOf('hi') !== -1) return true;
    else if (input.indexOf('bye') !== -1) return null;
    else return false;
  };

  options = () => {
    let options = [
      { value: '4', label: 'سلام' },
      { value: '5', label: 'خدافظ' },
      { value: '6', label: 'رستوران یک' },
      { value: '7', label: 'آپشن دو' }
    ];
    return options;
  };

  onSelectChange = e => {
    console.log(e);
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
            </div>
            <div className="d-flex w-100 justify-content-around">
              <AdvancedSelect
                options={this.options()}
                onChange={value => this.setState({ val: value })}
                className="w-50 ml-1 mt-2 text-right"
                multiple={true}
                value={this.state.val}
                placeholder="متن جستجو را وارد کنید"
                searchable={true}
              />
              <AdvancedSelect
                options={this.options()}
                onChange={value => this.setState({ val: value })}
                className="w-50 mt-2 text-right"
                multiple={false}
                value={this.state.val}
                placeholder="متن جستجو را وارد کنید"
                searchable={false}
              />
            </div>
            <div className="row">
              <CheckBox label="سلام" onChange={this.onSelectChange} />
            </div>
            <div className="row">
              <CheckBox label="خدافظ" onChange={this.onSelectChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
