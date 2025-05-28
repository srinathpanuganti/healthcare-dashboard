import React from 'react'
import './UpcomingSchedule.css';

const upcomingSchedule = {
  thursday: [
    { icon: "💉", title: "Health checkup complete", time: "11:00 AM" },
    { icon: "🦷", title: "Opthalmologist", time: "14:00 PM" },
  ],
  saturday: [
    { icon: "❤️", title: "cardiologist", time: "12:00 AM" },
    { icon: "👨‍⚕️", title: "Neurologist", time: "16:00 PM" },
  ],
};

const UpcomingSchedule  = () => {
  return (
    <div className="schedule-container">
        <h3 className="schedule-title">The Upcoming Schedule</h3>

        <div className="day-section">
            <h4 className="day-heading">On Thursday</h4>
            <div className="grid">
                {upcomingSchedule.thursday.map((item, index) => (
                <div key={index} className="schedule-card">
                    <div>
                    <h5 className="item-title">{item.title}</h5>
                    <p className="item-time">{item.time}</p>
                    </div>
                    <span className="icon">{item.icon}</span>
                </div>
                ))}
            </div>
        </div>

        <div className="day-section">
            <h4 className="day-heading">On Saturday</h4>
            <div className="grid">
                {upcomingSchedule.saturday.map((item, index) => (
                <div key={index} className="schedule-card">
                    <div>
                    <h5 className="item-title">{item.title}</h5>
                    <p className="item-time">{item.time}</p>
                    </div>
                    <span className="icon">{item.icon}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default UpcomingSchedule 