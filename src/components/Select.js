import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, warnOnce } from '../lib/utils';
import { CSSTransitionGroup } from 'react-transition-group';

const options = props => {
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
    value: {},
    first: '',
    multiple: false,
    selectSize: 4,
    options: [{ value: '', text: '', disabled: false }],
    name: '',
    id: '',
    disabled: false,
    required: false,
    change: () => ''
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

  stateClass = () => {
    const state = this.computedState();
    if (state === true) {
      return 'is-valid';
    } else if (state === false) {
      return 'is-invalid';
    }
    return null;
  };

  inputClass = () => {
    return [
      'form-control',
      this.stateClass(),
      `form-control-${this.props.bsSize}`,
      !this.props.multiple && this.props.selectSize > 1 ? null : 'custom-select'
    ];
  };

  states = {
    localValue: this.props.value
  };

  render(props) {
    this.props.value = Object.assign({}, this.state.localValue);

    return;
  }
}
