import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ProgressBar extends React.Component {
  static PropType = {
    className: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    label: PropTypes.string,
    showValue: PropTypes.bool,
    showIcon: PropTypes.bool,
    iconClass: PropTypes.string,
    type: PropTypes.oneOf(['happy', 'neutral', 'sad']), //for now the color is only limited to comment values
    direction: PropTypes.oneOf(['right', 'left'])
  };

  static defaultProps = {
    showValue: true,
    showIcon: true,
    type: 'happy',
    direction: 'right'
  };

  render() {
    let {
      value,
      max,
      label,
      showValue,
      showIcon,
      iconClass,
      type,
      direction,
      labelLocation,
      className,
      ...attributes
    } = this.props;

    const wrapperClassNames = classNames(
      'd-flex w-100 align-items-center',
      direction === 'left' ? 'ltr-progress' : ''
    );

    const iconClassNames = classNames(
      iconClass,
      direction === 'left' ? 'mr-2' : 'ml-2',
      'col-1'
    );

    const labelClassNames = classNames(direction === 'left' ? 'pl-2' : 'pr-2');

    return (
      <div className={wrapperClassNames}>
        {showIcon ? <i className={iconClassNames} /> : null}
        <Progress
          style={{ minWidth: '50%', maxWidth: '90%' }}
          max={max}
          value={value}
          barClassName={`${type}-bar`}
          {...attributes}
        />
        <div className={labelClassNames}>
          {showValue ? <span>{value}</span> : null}
          <span className="mr-2">{label}</span>
        </div>
      </div>
    );
  }
}
