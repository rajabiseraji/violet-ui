import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Checkbox from './Checkbox';

const Wrapper = props => {
  if (props.stacked) return <div className="w-100">{props.children}</div>;
  else return props.children;
};

export default class CheckboxGroup extends React.Component {
  static PropType = {
    children: PropTypes.arrayOf(PropTypes.node),
    value: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.object),
    stacked: PropTypes.bool,
    id: PropTypes.string,
    direction: PropTypes.oneOf(['right', 'left']),
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    options: [
      {
        value: '',
        isChecked: '',
        className: ''
      }
    ],
    stacked: false,
    direction: 'right'
  };

  state = {
    localValue: []
  };

  componentWillMount() {
    let futureState = [];
    this.props.options.forEach(option => {
      if (option.isChecked) futureState.push(option.value);
    });
    this.setState({ localValue: futureState });
  }

  handleChange = option => {
    /**
         * Handle inner component stuff
         */
    let localIndex = this.state.localValue.indexOf(option.value);
    let futureState = this.state.localValue;
    if (localIndex === -1 && option.isChecked) futureState.push(option.value);
    else if (localIndex > -1 && !option.isChecked)
      futureState.splice(localIndex, 1);
    this.setState({ localValue: futureState });
    /**
         * Trigger the parent event 
         */
    if (this.props.onChange) this.props.onChange(this.state.localValue);
  };

  GenerateOptions = () => {
    let Options = this.props.options.map((option, index) => {
      return (
        <Wrapper stacked={this.props.stacked} key={`wrapper-checkbox-${index}`}>
          <Checkbox
            className={option.className}
            label={option.value || `option-${index}`}
            value={option.value || `option-${index}`}
            isChecked={option.isChecked}
            direction={this.props.direction}
            onChange={this.handleChange}
            key={`option-${index}`}
          />
        </Wrapper>
      );
    });
    return Options;
  };

  GenerateChildren = () => {
    if (!this.props.children) return;
    return this.props.children.map((child, index) => {
      return (
        <Wrapper
          stacked={this.props.stacked}
          key={`wrapper-checkbox-child-${index}`}
        >
          {React.cloneElement(child, {
            onChange: this.handleChange,
            label: child.props.label || `child-${index}`,
            value: child.props.value || `child-${index}`,
            direction: this.props.direction,
            key: `child-${index}`
          })}
        </Wrapper>
      );
    });
  };

  directionClass = () => {
    if (this.props.direction === 'right') return 'col-12 px-0 text-right';
    else if (this.props.direction === 'left') return 'col-12 px-0 text-left';
  };

  render() {
    return (
      <div className={this.directionClass()}>
        {this.GenerateOptions()}
        {this.GenerateChildren()}
      </div>
    );
  }
}
