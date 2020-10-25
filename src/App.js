import React from 'react';
import axios from 'axios';

import Summary from './components/Summary';
import Map from './components/Map';
import Financial from './components/Financial';
import Credit from './components/Credit';
import Opportunity from './components/Opportunity';
import Activity from './components/Activity';

import './styles/app.css';
import './styles/global.css';
import Spinner from './components/utils/Spinner';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      customer: {},
      credit: {},
      opportunity: {},
      activity: [],
      isLoading: true
    };
  }

  componentDidMount() {

      axios.get('db.json').then(res => {
        const { customer, credit, opportunity, activity } = res.data;

        this.setState({
          customer,
          credit,
          opportunity,
          activity,
          isLoading: false
        })  
      })

  }
  
  render() {
    const { customer, credit, opportunity, activity, isLoading } = this.state;

    if (isLoading) {
      return <Spinner />
    } else {
      return (
        <div className="container">
          <section className="summary-container">
            <Summary data={customer}/>
          </section>

          <section className="map-container">
            <Map data={customer}/>
          </section>

          <section className="financial-container">
            <Financial data={opportunity}/>
          </section>

          <section className="opportunity-container">
            <Opportunity data={opportunity}/>
          </section>

          <section className="activity-container">
            <Activity data={activity}/>
          </section>

          <section className="credit-container">
            <Credit data={credit}/>
          </section>
        </div>
      );
    }
  }
}