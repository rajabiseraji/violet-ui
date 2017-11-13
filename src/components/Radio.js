import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { CSSTransitionGroup } from 'react-transition-group';

export default class Radio extends React.Component {
  static PropType = {
    valid: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    onChange: PropTypes.func,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    id: PropTypes.string,
    direction: PropTypes.oneOf(['right', 'left'])
  };

  static defaultProps = {
    isChecked: false,
    direction: 'right',
    onChange: () => {}
  };

  state = {
    localValue: this.props.isChecked || false
  };

  handleChanges = e => {
    // e.preventDefault();
    // e.stopPropagation();
    this.setState({ localValue: e.target.checked });
    this.props.value
      ? this.props.onChange({
          value: this.props.value,
          isChecked: e.target.checked
        })
      : this.props.onChange({
          value: this.props.id,
          isChecked: e.target.checked
        });
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
      <label className="custom-control custom-radio">
        <input
          type="radio"
          className={InputClasses}
          checked={
            this.props.isChecked !== undefined
              ? this.props.isChecked
              : this.state.localValue
          }
          onChange={this.handleChanges}
        />
        {this.props.direction === 'right' ? (
          <span className="custom-control-indicator ml-2" />
        ) : null}
        <span className={DescriptionClasses}>{this.props.label}</span>
        {this.props.direction === 'left' ? (
          <span className="custom-control-indicator mr-2" />
        ) : null}
      </label>
    );
  }
}
