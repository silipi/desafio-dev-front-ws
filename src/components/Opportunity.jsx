import React from 'react';
import PropTypes from 'prop-types';

import OpportunityBadge from './utils/OpportunityBadge';

import '../styles/components/opportunity.css';

export default class Opportunity extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const { data } = this.props;

    return (
      <div id="card-opportunity">
        <h1>{`Oportunidades (${data?.total}):`}</h1>
        <div className="opportunity-badges">
          <div className="opportunity-column">
            <OpportunityBadge color="green" description={data?.win?.description} quantity={data?.win?.quantity} value={data?.win?.value}/>
            <OpportunityBadge color="red" description={data?.lost?.description} quantity={data?.lost?.quantity} value={data?.lost?.value}/>
          </div>
          <div className="opportunity-column">
            <OpportunityBadge color="blue" description={data?.open?.description} quantity={data?.open?.quantity} value={data?.open?.value}/>
            <OpportunityBadge color="grey" description={data?.discarded?.description} quantity={data?.discarded?.quantity} value={data?.win?.value}/>
          </div>
        </div>
      </div>
    )
  }
}
