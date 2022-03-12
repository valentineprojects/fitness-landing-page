import React from 'react'
import './features.css'
import '../../styles.css'
import mobilePreview from '../../assets/mobile-preview.png'
import checkmarkIcon from '../../assets/check_circle_outline.svg'

const Features = () => {
  return (
    <section>
      <div className="feature-container flex-row">
        <div className="feature flex-column">
          <h3>Start your yoga journey now!</h3>
          <img className='feature-image' src={mobilePreview} alt="mobile preview" srcset="" />
        </div>
        {/* Feature items*/}
        <div className="feature flex-column">
          <h3>Is Positive Yoga right for me?</h3>
          {/* Feature1 */}
          <div className='feature-item flex-row'>
            <img className='feature-checkmark' src={checkmarkIcon} alt="checkmark" />
            <p className='feature-text'>Each program adapts to your age or fitness level</p>
          </div>
          {/* Feature2 */}
          <div className='feature-item flex-row'>
            <img className='feature-checkmark' src={checkmarkIcon} alt="checkmark" />
            <p className='feature-text'>Mindful way to exercise and get real results</p>
          </div>
          {/* Feature3 */}
          <div className='feature-item flex-row'>
            <img className='feature-checkmark' src={checkmarkIcon} alt="checkmark" />
            <p className='feature-text'>Effective and long-term lasting results</p>
          </div>
          {/* Feature4 */}
          <div className='feature-item flex-row'>
            <img className='feature-checkmark' src={checkmarkIcon} alt="checkmark" />
            <p className='feature-text'>Suited activities that benefit both the mind and body</p>
          </div>
          {/* Feature5 */}
          <div className='feature-item flex-row'>
            <img className='feature-checkmark' src={checkmarkIcon} alt="checkmark" />
            <p className='feature-text'>Low-intensity but highly-effective workouts</p>
          </div>
          {/* Feature6 */}
          <div className='feature-item flex-row'>
            <img className='feature-checkmark' src={checkmarkIcon} alt="checkmark" />
            <p className='feature-text'>Extra attention to muscle, joint and back health</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Features