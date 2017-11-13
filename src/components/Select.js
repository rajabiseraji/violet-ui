import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { mapToCssModules, warnOnce } from '../lib/utils';
// import { CSSTransitionGroup } from 'react-transition-group';

const Options = props => {
  let optionItems = props.formOptions.map((option, index) => (
    <option
      value={option.value}
      disabled={option.disabled}
      key={`option-${index}`}
    >
      {option.text}
    </option>
  ));
  return optionItems;
};

export default class Select extends React.Component {
  static propType = {
    value: PropTypes.object,
    first: PropTypes.string,
    multiple: PropTypes.bool,
    selectSize: PropTypes.number,
    options: PropTypes.array, //this is just for now, we need to normalize it in the future
    name: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    valid: PropTypes.bool, //this must be refactored to a mixin
    bsSize: PropTypes.string,
    change: PropTypes.func
  };

  static defaultProps = {
    value: '',
    first: '',
    multiple: false,
    selectSize: 4,
    options: [{ value: '', text: '', disabled: false }],
    name: '',
    id: '',
    disabled: false,
    required: false,
    bsSize: 'md',
    change: () => ''
  };

  handleChange = event => {
    let selectValue = event.target.value; // this is the value of the selected option
    // TODO: Sanitize the value if need be
    // let local = this.state.localValue || [];
    // let selectValueIndex = local.indexOf(selectValue)
    // if(selectValueIndex !== -1)
    //   local.splice(selectValueIndex, 1);
    // else if(selectValueIndex === -1)
    //   local.push(selectValue);
    this.setState({ localValue: selectValue });
    // Emit change event
    this.props.change(selectValue);
  };

  computedState = () => {
    const state = this.props.valid;
    if (state === true || state === 'valid') {
      return true;
    } else if (state === false || state === 'invalid') {
      return false;
    }
    return null;
  };

  /**
   * This handles validity state of the select
   */
  stateClass = () => {
    const state = this.computedState();
    if (state === true) {
      return 'is-valid';
    } else if (state === false) {
      return 'is-invalid';
    }
    return null;
  };
  /**
   * This computes the class that must be assigned to the select tag
   */
  inputClass = () => {
    return [
      'form-control',
      this.stateClass(),
      `form-control-${this.props.bsSize}`,
      !!this.props.multiple && this.props.selectSize > 1
        ? null
        : 'custom-select'
    ];
  };

  state = {
    localValue: this.props.multiple ? [] : this.props.value
  };

  render(props) {
    // this.props.value = Object.assign({}, this.state.localValue);

    return (
      <select
        className={classNames(this.inputClass(), this.stateClass())}
        name={this.props.name}
        id={this.props.id}
        onChange={this.handleChange}
        // value = {this.state.localValue}
        multiple={this.props.multiple}
        size={
          this.props.multiple || this.props.selectSize > 1
            ? this.props.selectSize
            : null
        }
        disabled={this.props.disabled}
        required={this.props.required}
        ref="input"
      >
        <Options formOptions={this.props.options} />
      </select>
    );
  }
}

//TODO: Make SSR Considerations like safe ID and others ..
