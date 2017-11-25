import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

export default class InputGroup extends React.Component {
  /**
     * Note that all the validation is done outside this function and 
     * passed through valid prop and controlled using onChange and onInput events
     */
  static PropType = {
    placeholder: PropTypes.string,
    id: PropTypes.string,
    iconClass: PropTypes.string,
    valid: PropTypes.bool,
    direction: PropTypes.oneOf(['right', 'left']),
    className: PropTypes.string,
    invalidMessage: PropTypes.string,
    onChange: PropTypes.func, // This is for when it changes
    onInput: PropTypes.func // This is for when the change is submitted
  };

  static defaultProps = {
    id: 'input-group-0',
    iconClass: 'fa fa-chevron-left',
    direction: 'right',
    invalidMessage: 'لطفا مقدار درست را وارد کنید',
    onInput: () => {},
    onChange: () => {}
  };

  state = {
    isOpen: this.props.valid,
    inputValue: ''
  };

  /**
   * This function can be used for any kind of validation and afterprocess (also server side)
   */
  submitInput = () => {
    this.props.onInput(this.state.inputValue);
  };
  /**
   * This function is for hot checking the value of the input, mostly used for client side validation
   */
  setInputValue = e => {
    this.setState({ inputValue: e.target.value });
    this.props.onChange(e.target.value);
  };

  render() {
    let inputGroupClass = classNames(
      'input-group-btn',
      this.props.direction === 'left'
        ? 'input-group-left'
        : 'input-group-right',
      this.props.className
    );

    let buttonClasses = classNames(
      'btn btn-secondary input-group-button',
      this.props.direction === 'left'
        ? 'rounded-0 rounded-right border-left-0'
        : '',
      this.props.direction === 'right' ? ' border-right-0' : ''
    );

    let inputClasses = classNames(
      'form-control',
      this.props.direction === 'left' ? 'rounded-0 rounded-left' : '',
      this.props.direction === 'right' ? 'rounded-0 rounded-right' : ''
    );
    return (
      <div className={inputGroupClass}>
        <span className="input-group-btn">
          <button
            className={buttonClasses}
            type="button"
            id={this.props.id}
            onClick={this.submitInput}
          >
            <i className={this.props.iconClass} />
          </button>
          <ReactTooltip place="top" id="tooltip" effect="solid">
            {this.props.invalidMessage}
          </ReactTooltip>
        </span>
        <input
          type="text"
          data-tip
          data-tip-disable={!this.state.isOpen}
          onChange={this.setInputValue}
          data-for="tooltip"
          className={inputClasses}
          placeholder={this.props.placeholder}
          aria-label={this.props.placeholder}
        />
      </div>
    );
  }
}
