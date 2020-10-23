import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/utils/activity-badge.css';

export default class ActivityBadge extends React.Component {
  render() {
    const { color, description, quantity } = this.props;

    return (
      <div className="container-badge-activity-aux">
        <div className={`container-badge-activity ${color}`} >
          <div className="number-activity">{quantity}</div>
          <span>{description}</span>
        </div>
      </div>
     
    )
  }
}

ActivityBadge.propTypes = {
  color: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
}