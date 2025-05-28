import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className='anatomy'>
        <div className='anatomy-section'>
            <div className='anatomy-img'>
              <img src='/anatomy.png' />

              <div className="label heart">
                ❤️ Healthy Heart
              </div>
              <div className="label leg">
                🦵 Healthily Leg
              </div>
            </div>
        </div>
    </div>
  )
}

export default AnatomySection