import React from 'react'
import './header.css'
import '../../styles.css'
import logo from '../../assets/Logo.svg'
import offerIcon from '../../assets/mdi_local_offer.svg'
import CountdownTimer from '../countdown/CountdownTimer.js'



const Header = () => {
  const nowTimeMs = Date.now()
  const countDownTime15Min = nowTimeMs + 900000;
  return (
    <header >
      <div className="sticky">
        <div className="pre-header flex-center">
          <img className='icon-offer' src={offerIcon}></img>
          50% discount only valid for
          <div>
            <CountdownTimer countdownTimestampMs={countDownTime15Min} />
          </div>
        </div>
      </div>  
      <div className='header flex-center'>
        <img className='logo' src={logo}/>
      </div>
    </header>
  )
}

export default Header
