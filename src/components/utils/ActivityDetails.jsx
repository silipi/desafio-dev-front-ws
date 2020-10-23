import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/utils/activity-details.css';

export default class ActivityDetails extends Component {
  render() {
    const { icon, title, person, date } = this.props;

    return (
      <div className="activity-details-container">
        <div className="activity-details-icon">{icon}</div>

        <div className="activity-details-text">
          <h3>{title}</h3>
          <p>{person}</p>
          <span>{date}</span>
        </div>
      </div>
    )
  }
}

ActivityDetails.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
