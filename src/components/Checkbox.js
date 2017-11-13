import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { CSSTransitionGroup } from 'react-transition-group';

export default class Checkbox extends React.Component {
  static PropType = {
    valid: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    onChange: PropTypes.func,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    id: PropTypes.string
  };

  static defaultProps = {
    isChecked: false
  };

  state = {
    localValue: this.props.isChecked || false
  };

  handleChanges = e => {
    this.setState({ localValue: e.target.checked });
    if (!this.state.localValue)
      this.props.value
        ? this.props.onChange(this.props.value)
        : this.props.onChange(this.props.id);
  };

  render() {
    let { className, valid, size } = this.props;

    const InputClasses = classNames(
      className,
      valid === false && 'is-invalid',
      valid && 'is-valid',
      size ? `form-control-${size}` : false,
      'custom-control-input'
    );

    const DescriptionClasses = classNames(
      'custom-control-description',
      valid === false && 'is-invalid',
      valid && 'is-valid'
    );

    return (
      <label className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className={InputClasses}
          checked={this.state.localValue}
          onChange={this.handleChanges}
        />
        <span className="custom-control-indicator" />
        <span className={DescriptionClasses}>{this.props.label}</span>
      </label>
    );
  }
}
