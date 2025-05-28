import React from 'react'
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointment on this week</p>
      </div>

      <div className="bar-chart">
        {[
          [50, 40, 20],
          [60, 30, 15],
          [70, 20, 25],
          [55, 35, 20],
          [65, 45, 30],
          [60, 30, 10],
          [50, 40, 20],
        ].map((heights, i) => (
          <div className="bar-group" key={i}>
            <div className="bar-stack">
              <div className="bar cyan" style={{ height: `${heights[0]}px` }}></div>
              <div className="bar indigo" style={{ height: `${heights[1]}px` }}></div>
              <div className="bar gray" style={{ height: `${heights[2]}px` }}></div>
            </div>
            <span className="day-label">
              {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed