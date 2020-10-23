import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { children, title, selector } = this.props;
    return (
      <div id={`card-${selector}`}>
        <h1>{title}</h1>
        {children}
      </div>
    )
  }
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}
