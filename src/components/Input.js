import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, warnOnce } from '../lib/utils';
import { CSSTransitionGroup } from 'react-transition-group';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  iconClass: PropTypes.string
};

const defaultProps = {
  tag: 'p',
  type: 'text'
};

const FeedbackIcon = props => {
  let validIconClass = `fa fa-${props.valid
    ? 'check'
    : 'exclamation'} ${props.valid ? 'valid-icon' : 'invalid-icon'}`;
  if (props.valid === true || props.valid === false) {
    return <i key={props.valid + '-icon'} className={validIconClass} />;
  } else return null;
};

const InputIcon = props => {
  let inputIconClass = '';
  if (props.type === 'username') inputIconClass = 'fa fa-user';
  else if (props.type === 'password') inputIconClass = 'fa fa-lock';
  else if (props.iconClass !== undefined) inputIconClass = props.iconClass;
  if (inputIconClass.length > 0) {
    return (
      <i key={inputIconClass + '-icon'} className={inputIconClass + ' icon'} />
    );
  } else return null;
};

const InputWrapper = props => {
  let { valid, className, innerRef, type, children, iconClass } = props;
  let wrapperClasses = classNames(
    'inner-addon',
    valid !== undefined ? 'left-addon' : '',
    type === 'password' || type === 'username' || iconClass !== undefined
      ? 'right-addon'
      : '',
    className
  );
  return (
    <div key={innerRef + '-div'} className={wrapperClasses}>
      <CSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        className={className}
      >
        <FeedbackIcon
          valid={valid}
          key={(valid === undefined ? '' : valid) + 'feedback-icon'}
        />
      </CSSTransitionGroup>
      <InputIcon type={type} iconClass={iconClass} />
      {children}
    </div>
  );
};

const RenderNumber = props => {
  let { innerRef, classes, ...attributes } = props;
  let value = props.value || 0;

  const increase = () => {
    if (props.max !== undefined && value < props.max) {
      value++;
    } else if (props.max === undefined) value++;
    props.onChange(value);
  };

  const decrease = () => {
    if (props.min !== undefined && value > props.min) {
      value--;
    } else if (props.min === undefined) value--;
    props.onChange(value);
  };

  const handleChange = e => {
    let val = e.target.value;
    if (
      (props.min !== undefined && val < props.min) ||
      (props.max !== undefined && val > props.max)
    ) {
      return;
    }
    value = val;
    props.onChange(val);
  };
  return (
    <div className="qty-container">
      <div className="d-flex flex-row">
        <div className="btn-group-vertical btn-group-xs">
          <button
            className="btn btn-secondary btn-sm display-flex qty-button qty-increase"
            type="button"
            onMouseDown={increase}
          >
            <i className="fa fa-chevron-up" />
          </button>
          <button
            className="btn btn-secondary btn-sm display-flex qty-button qty-decrease"
            type="button"
            onMouseDown={decrease}
          >
            <i className="fa fa-chevron-down" />
          </button>
        </div>
        <input
          type="number"
          className={classNames('form-control qty-input', classes)}
          {...attributes}
          value={props.value}
          onChange={handleChange}
          ref={innerRef}
        />
      </div>
    </div>
  );
};

class Input extends React.Component {
  state = {
    localValue: this.props.value || ''
  };

  handleInputChange = newValue => {
    this.setState({ localValue: newValue });
  };

  render() {
    let {
      className,
      iconClass,
      cssModule,
      type,
      bsSize,
      valid,
      tag,
      addon,
      plaintext,
      innerRef,
      ...attributes
    } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    const isNotaNumber = new RegExp('\\D', 'g');

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let Tag = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      Tag = tag;
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    } else if (selectInput) {
      formControlClass = `${formControlClass} custom-select`;
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce(
        'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
      );
      bsSize = attributes.size;
      delete attributes.size;
    }

    const classes = mapToCssModules(
      classNames(
        className,
        valid === false && 'is-invalid',
        valid && 'is-valid',
        bsSize ? `form-control-${bsSize}` : false,
        formControlClass
      ),
      cssModule
    );

    if (Tag === 'input') {
      attributes.type = type;
    }

    if (Tag === 'input') {
      if (type === 'number')
        return (
          <RenderNumber
            {...attributes}
            value={this.state.localValue}
            innerRef={innerRef}
            classes={classes}
            onChange={this.handleInputChange}
          />
        );
      return (
        <InputWrapper
          valid={valid === undefined ? undefined : this.props.valid}
          innerRef={this.props.innerRef}
          className={this.props.className}
          type={type}
          iconClass={iconClass}
        >
          <input {...attributes} ref={innerRef} className={classes} />
        </InputWrapper>
      );
    } else {
      return <Tag {...attributes} ref={innerRef} className={classes} />;
    }
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
