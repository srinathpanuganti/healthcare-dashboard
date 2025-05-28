import React from 'react'
import './CalendarView.css';

const calendarData = [
  [25, 26, 27, 28, 29, 30, 31],
  ['10:00\n11:00\n12:00', '08:00\n09:00\n10:00', '12:00\n13:00', '10:00\n11:00', '—\n14:00\n16:00', '12:00\n14:00\n15:00', '09:00\n10:00\n11:00']
];

const appointmentCards = [
  { name: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson', type: 'dentist' },
  { name: 'Physiotherapy Appointment', time: '11:00-12:00', doctor: 'Dr. Kevin Djones', type: 'physio' }
];

const CalendarView = () => {
  return (
    <div class="calendar-container">
  <div class="calendar-header">
    <h3 class="calendar-title">October 2021</h3>
    <div class="calendar-nav">
      <span class="chevron">&#9664;</span>
      <span class="chevron">&#9654;</span>
    </div>
  </div>

  <div class="calendar-grid">
    {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
        <div key={day} className='day-name'>
          {day}
        </div>
      ))}

    {calendarData[0].map((date, index) => (
      <div key={index} className="day-cell">
        <div
          className={`date-number ${
            date === 30 ? 'highlight-date' : ''
          }`}
        >
          {date}
        </div>
        <div className="event-list">
          {calendarData[1][index].split('\n').map((time, timeIndex) => (
            <div
              key={timeIndex}
              className={`event-box ${
                time === '12:00' && date === 30
                  ? 'primary-event'
                  : time === '09:00' && date === 30
                  ? 'secondary-event'
                  : time === '09:00'
                  ? 'primary-event'
                  : time === '11:00'
                  ? 'gray-event'
                  : 'default-event'
              }`}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>

  <div className="appointment-grid">
    {appointmentCards.map((appointment, index) => (
      <div
        key={index}
        className={`appointment-card ${
          appointment.type === "dentist" ? "dentist-card" : "default-card"
        }`}
      >
        <div className="appointment-header">
          <span className="icon">
            {appointment.type === "dentist" ? "🦷" : "💪"}
          </span>
          <h4 className="appointment-title">{appointment.name}</h4>
        </div>
        <p className="appointment-time">{appointment.time}</p>
        <p className="appointment-doctor">{appointment.doctor}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default CalendarView