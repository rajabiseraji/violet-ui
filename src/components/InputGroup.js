import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

export default class InputGroup extends React.Component {
  static PropType = {
    placeholder: PropTypes.string,
    id: PropTypes.string,
    iconClass: PropTypes.string,
    valid: PropTypes.bool,
    direction: PropTypes.oneOf(['right', 'left']),
    className: PropTypes.string,
    invalidMessage: PropTypes.string
  };

  static defaultProps = {
    id: 'input-group-0',
    iconClass: 'fa fa-chevron-left',
    direction: 'right',
    invalidMessage: 'لطفا مقدار درست را وارد کنید'
  };

  state = {
    isOpen: this.props.valid
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
        ? 'rounded-0 rounded-right border-top-0'
        : '',
      this.props.direction === 'right' ? 'border-top-0' : ''
    );

    let inputClasses = classNames(
      'form-control',
      this.props.direction === 'left' ? 'rounded-0 rounded-left' : '',
      this.props.direction === 'right' ? 'rounded-0 rounded-right' : ''
    );
    return (
      <div className={inputGroupClass}>
        <span className="input-group-btn">
          <button className={buttonClasses} type="button" id={this.props.id}>
            <i className={this.props.iconClass} />
          </button>
          <ReactTooltip place="top" id="tooltip" effect="solid">
            {this.props.invalidMessage}
          </ReactTooltip>
        </span>
        <input
          type="text"
          data-tip
          data-for="tooltip"
          className={inputClasses}
          placeholder={this.props.placeholder}
          aria-label={this.props.placeholder}
        />
      </div>
    );
  }
}
