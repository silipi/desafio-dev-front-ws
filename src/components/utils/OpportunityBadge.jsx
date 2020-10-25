import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/utils/opportunity-badge.css';
import Helper from './Helper';

export default class OpportunityBadge extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    value: PropTypes.number
  }

  render() {
    const { color, description, quantity, value } = this.props;

    return (

        <div className={`container-badge-opportunity ${color}`} >
          <div id="number-opportunity">{quantity ? quantity : 0}</div>

          <div id="text-badge-opportunity">
            <h3>{description}</h3>
            <span>{value ? Helper.convertReal(value) : "-"}</span>
          </div>
        </div> 
  
    )
  }
}