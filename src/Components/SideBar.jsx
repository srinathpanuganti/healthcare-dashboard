import React from 'react'
import { FaThLarge, FaHistory, FaCalendarAlt, FaRegCalendarCheck, FaChartBar, FaComments, FaPhone, FaCog  } from 'react-icons/fa';
import './SideBar.css';

const navigationItems = [
  { name: 'Dashboard', icon: FaThLarge, active: true },
  { name: 'History', icon: FaHistory,},
  { name: 'Calendar', icon: FaCalendarAlt,},
  { name: 'Appointments', icon: FaRegCalendarCheck,},
  { name: 'Statistics', icon: FaChartBar,},
];

const toolsItems = [
  { name: 'Chat', icon: FaComments},
  { name: 'Support', icon: FaPhone,},
];

const settingsItem = { name: 'Setting', icon: FaCog };


const SideBar = () => {
  return (
    <div className='sidebar'>
        <h4>General</h4>
        <nav className='nav'>
            <ul>
                {navigationItems.map((item, index) => (
                    <li key={index}><item.icon/><span>{item.name}</span></li>
                ))}
            </ul>      
        </nav>

        <div className="section">
        <h4 className="section-title">Tools</h4>
        <ul>
          {toolsItems.map((item, index) => (
            <li key={index} className="nav-item">
              <item.icon />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="setting">
        <ul>
          <li className="nav-item">
            <settingsItem.icon />
            <span>{settingsItem.name}</span>
          </li>
        </ul>
      </div>           
    </div>
  )
}

export default SideBar