import React from 'react';
import PropTypes from 'prop-types';

import ActivityBadge from './utils/ActivityBadge';
import ActivityDetails from './utils/ActivityDetails';
import { MdEmail, MdPeople, MdPhone, MdDateRange, MdLocalActivity } from 'react-icons/md';

import '../styles/components/activity.css';

export default class Activity extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      data: this.props.data,
      filteredData: []
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value }, () => {
      this.filterArray();
    })
  }

  filterArray = () => {
    let searchString = this.state.query;
    let responseData = this.state.data;

    if (searchString.length > 0) {
      responseData = responseData.filter((e) => {
        return e.title.toLowerCase().includes(searchString.toLowerCase());
      })

      this.setState({
        filteredData: responseData
      })
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div id="container-activity">
        <h1>Atividades:</h1>

        <input type="text" placeholder="Pesquise por uma atividade..." onChange={this.handleInputChange}/>

        <div className="badges">
          <ActivityBadge quantity={4} color="red" description="Em atraso" />
          <ActivityBadge quantity={3} color="blue" description="Em andamento" />
          <ActivityBadge quantity={2} color="yellow" description="Previstas" />
          <ActivityBadge quantity={2} color="green" description="Concluídas" />
        </div>

        <div className="activities-general">{
          this.state.filteredData.length > 0 ? 
            this.state.filteredData.map((item, index) => {
              const confereIcon = (i) => {
                switch (i) {
                  default:
                    return <MdLocalActivity size={22}/>
                  case "Email":
                    return <MdEmail size={24} />
                  case "Phone":
                    return <MdPhone size={24} />
                  case "DateRange":
                    return <MdDateRange size={24} />
                  case "People":
                    return <MdPeople size={24} />
                }
              }
              return (
                <article key={index} className="activity-info">
                  <ActivityDetails 
                    icon={confereIcon(item.icon)}
                    title={item.title}
                    person={item.person}
                    date={item.date}
                  />
                </article>
              )
            }) : 
            data.map((item, index) => {
              const confereIcon = (i) => {
                switch (i) {
                  default:
                    return <MdLocalActivity size={22}/>
                  case "Email":
                    return <MdEmail size={24} />
                  case "Phone":
                    return <MdPhone size={24} />
                  case "DateRange":
                    return <MdDateRange size={24} />
                  case "People":
                    return <MdPeople size={24} />
                }
              }
              return (
                <article key={index} className="activity-info">
                  <ActivityDetails 
                    icon={confereIcon(item.icon)}
                    title={item.title}
                    person={item.person}
                    date={item.date}
                  />
                </article>
              )
            }) 
        }</div>
      </div>
    )
  }
}