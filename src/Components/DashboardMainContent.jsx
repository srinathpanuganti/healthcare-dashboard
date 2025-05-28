import React from 'react'
import SideBar from './SideBar'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import './DashboardMainContent.css'

const DashboardMainContent = () => {
  return (
      <div className='body-main'>
        <SideBar/>
        <div className='dashboard-section'>
          <div className='anatomy-head'>
            <h2>Dashboard</h2>
            <h6>This Week</h6>
          </div>
          <div className='anatomy-body'>
            <AnatomySection/>
            <HealthStatusCards/>
          </div>
          <ActivityFeed/>
        </div>
        <div className='calender-section'>
          <CalendarView/>
          <UpcomingSchedule/>
        </div>
      </div>
  )
}

export default DashboardMainContent