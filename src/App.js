import React from 'react';

import Summary from './components/Summary';
import Map from './components/Map';
import Financial from './components/Financial';
import Credit from './components/Credit';
import Opportunity from './components/Opportunity';
import Activity from './components/Activity';

import './styles/app.css';
import './styles/global.css';


function App() {
  return (
    <div className="container">
      <section className="summary-container">
        <Summary />
      </section>

      <section className="map-container">
        <Map />
      </section>

      <section className="financial-container">
        <Financial />
      </section>

      <section className="opportunity-container">
        <Opportunity />
      </section>

      <section className="activity-container">
        <Activity />
      </section>

      <section className="credit-container">
        <Credit />
      </section>
    </div>
  );
}

export default App;
