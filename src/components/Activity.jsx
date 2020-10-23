import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActivityBadge from './utils/ActivityBadge';
import ActivityDetails from './utils/ActivityDetails';
import { MdEmail, MdPeople, MdPhone, MdDateRange, MdLocalActivity } from 'react-icons/md';

import '../styles/components/activity.css';

export default function Activity() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    axios.get('db.json')
    .then(res => {
      const activityData = res.data.activity;
      setActivity(activityData)})
    }, 
  []);

  return (
    <div id="container-activity">
      <h1>Atividades:</h1>

      <input type="text" placeholder="Escreva um registro..."/>

      <div className="badges">
        <ActivityBadge quantity={4} color="red" description="Em atraso" />
        <ActivityBadge quantity={3} color="blue" description="Em andamento" />
        <ActivityBadge quantity={2} color="yellow" description="Previstas" />
        <ActivityBadge quantity={2} color="green" description="Concluídas" />
      </div>

      <div className="activities-general">

        {activity.map((item) => {

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

          return (<article className="activity-info">
            <ActivityDetails 
              icon={confereIcon(item.icon)}
              title={item.title}
              person={item.person}
              date={item.date}
            />
          </article>)
        })}

      </div>
      
    </div>
  )
}
