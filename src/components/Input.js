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
  cssModule: PropTypes.object
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

const InputWrapper = props => {
  return (
    <div
      key={props.innerRef + '-div'}
      className={classNames('inner-addon left-addon', props.className)}
    >
      {props.children}
    </div>
  );
};

class Input extends React.Component {
  render() {
    let {
      className,
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
      return (
        <InputWrapper
          valid={valid === undefined ? undefined : this.props.valid}
          innerRef={this.props.innerRef}
          className={this.props.className}
        >
          <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            className={className}
          >
            <FeedbackIcon
              valid={this.props.valid}
              key={
                (this.props.valid === undefined ? '' : this.props.valid) +
                'feedback-icon'
              }
            />
          </CSSTransitionGroup>
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
