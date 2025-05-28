import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faLungs, faTooth } from '@fortawesome/free-solid-svg-icons';
import './HealthStatusCards.css';


const healthData = [
  {
    emoji: <FontAwesomeIcon icon={faLungs}/>,
    title: "Lungs",
    date: "26 Oct 2021",
    progressColor: "#b91c1c",
    progress: 80,
  },
  {
    emoji: <FontAwesomeIcon icon={faTooth} />,
    title: "Teeth",
    date: "26 Oct 2021",
    progressColor: "#10b981",
    progress: 60,
  },
  {
    emoji: <FontAwesomeIcon icon={faBone} />,
    title: "Bone",
    date: "26 Oct 2021",
    progressColor: "#f97316",
    progress: 50,
  },
];


const HealthStatusCards = () => {
  return (
    <div className="card-list">
      {healthData.map((item, index) => (
        <div className="card" key={index}>
          <div className="emoji">
            {item.emoji}
            <h3 className="title">{item.title}</h3>
          </div>
          <p className="date">Date: {item.date}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.progressColor,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCards