import React from 'react';
import PropTypes from 'prop-types';
import Helper from './utils/Helper'

import '../styles/components/credit.css';

export default class Credit extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const { designed, avaliable } = this.props.data;

    return (
      <div id="card-credit">
        <h1>Limite de crédito:</h1>

        <div className="credit-designed">
          <h2>{designed ? Helper.convertReal(designed) : "-"}</h2>
          <span>Concebido</span>
        </div>

        <div className="credit-avaliable">
          <h2>{avaliable ? Helper.convertReal(avaliable) : "-"}</h2>
          <span>Disponível</span>
        </div>
      </div>
    )
  }
}