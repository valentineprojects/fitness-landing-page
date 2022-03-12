import React from 'react'
import './checkout.css'
import '../../styles.css'
import safeCheckout from '../../assets/safe-checkout.svg'
import planIcon from '../../assets/plan.svg'
import exerciseIcon from '../../assets/exercise.svg'
import shoeIcon from '../../assets/shoe.svg'
import dietIcon from '../../assets/diet.svg'
import whistleIcon from '../../assets/whistle.svg'
import smartwatchIcon from '../../assets/smartwatch.svg'
import bookcheckIcon from '../../assets/bookcheck.svg'
import checkmarkIcon from '../../assets/checkmark-icon.svg'


const Checkout = () => {
  return (
    <section className='checkout-section flex-center flex-column'>
      <div>
      <h1>Get access to your yoga program now!</h1>
      <div className="flex-row flex-parent">
        
          <div className='child1 flex-column'>
          <h3>Choose your plan and get <span className='text-accent-color'> 7 days free trial</span> </h3>
          {/* Box 1 */}
            <div className="box flex-row">
                <div className="box-text flex-column">
                <div>
                    <h5>6 month plan
                  <span className='box-text-save'>
                    Save 50%
                    </span>
                  </h5>
                </div>

                <div className="box-text-price">
                <h2>$9.99 <span>/ month</span> </h2>
                </div>
                <p className="box-text-payment-plan">
                <span className='text-cross'>$119.94</span>
                  <span className='text-accent-color'>$59.94</span> billed every 6 months
                  
                </p>
                </div>
                <div className="box-icon flex-column">
                  <img className='box-icon-icon' src={checkmarkIcon} alt="checkmark icon" /></div>
            </div>
          {/* Box 2 */}
            <div className="box flex-row">
                <div className="box-text flex-column">
                <div>
                    <h5>3 month plan
                  </h5>
                </div>

                <div className="box-text-price">
                <h2>$14.99 <span>/ month</span> </h2>
                </div>
                <p className="box-text-payment-plan">
                <span className='text-cross'>$59.97</span>
                  <span className='text-accent-color'>$44.97</span> billed every 3 months
                  
                </p>
                </div>
                <div className="box-icon flex-column">
                  <img className='box-icon-icon' src={checkmarkIcon} alt="checkmark icon" /></div>
            </div>
          {/* Box 3 */}
            <div className="box flex-row">
                <div className="box-text flex-column">
                <div>
                    <h5>1 month plan
                  </h5>
                </div>

                <div className="box-text-price">
                <h2>$19.99 <span>/ month</span> </h2>
                </div>
                <p className="box-text-payment-plan">
                 Billed monthly
                </p>
                </div>
                <div className="box-icon flex-column">
                  <img className='box-icon-icon' src={checkmarkIcon} alt="checkmark icon" /></div>
            </div>
            
          
            
          <button className="btn btn-text">Get your plan</button>
          <div className='text-container'>
            <p className='policy-text'>Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To cancel your subscription, please contact us at least 24 hours before the end of the trial period.</p>
          
          </div>
          <div className='text-container'>
            <p className='privacy-text'>By choosing a payment method you agree to the <a href="#">T&Cs</a> and <a href="#">Privacy Policy</a></p>
          </div>
          <img className='safe-checkout' src={safeCheckout} alt="safe checkout"/>
          </div>
          

          <div className='child2'>
            <h3>What's in my program?</h3>
            {/* Icon 1 */}
            <div className="icon-parent flex-row">
              <div className="icon-child">
                <img className="icon-child-icon" src={planIcon} alt="plan icon" /> </div>
              <div className="icon-child-text">
                <h5>A personalized yoga program</h5>
                <p>Completely safe and focused on your key goals</p>
              </div>
            </div>
              {/* Icon 2 */}
            <div className="icon-parent flex-row">
              <div className="icon-child">
                <img className="icon-child-icon" src={exerciseIcon} alt="exercise icon" /> </div>
              <div className="icon-child-text">
                <h5>Easy & enjoyable yoga workouts for your level</h5> <p>Program adjusts to your level and pace</p>
              </div>
            </div>
               {/* Icon 3 */}
            <div className="icon-parent flex-row">
              <div className="icon-child">
                <img className="icon-child-icon" src={shoeIcon} alt="shoe icon" /> </div>
              <div className="icon-child-text">
                <h5>No special preparation needed</h5>
                <p>Perfect for begginners! Requires no special preparation or equipment</p>
              </div>
            </div>
              {/* Icon 4 */}
            <div className="icon-parent flex-row">
              <div className="icon-child">
                <img className="icon-child-icon" src={dietIcon} alt="diet icon" /> </div>
              <div className="icon-child-text">
                <h5>Daily motivation & accountability</h5>
                <p>Track your progress, develop a healthy routine, reach goals faster</p>
              </div>
            </div>
            {/* Icon 5 */}
            <div className="icon-parent flex-row">
              <div className="icon-child">
                <img className="icon-child-icon" src={whistleIcon} alt="whistle icon" /> </div>
              <div className="icon-child-text">
                <h5>Browse from various yoga challenges</h5>
                <p>30 d morning yoga, mindful yoga, back flexibility challenge, and more!</p>
              </div>
            </div>
            {/* Icon 6 */}
            <div className="icon-parent flex-row">
              <div className="icon-child">
                <img className="icon-child-icon" src={smartwatchIcon} alt="smartwatch icon" /> </div>
              <div className="icon-child-text">
                <h5>Easy access on any device</h5>
                <p>Do your yoga anywhere across all types of devices</p>
              </div>
            </div>
            {/* Icon 7 */}
            <div className="icon-parent flex-row">
              <div className='icon-child'>
                <img className="icon-child-icon" src={bookcheckIcon} alt="bookcheck icon" /> </div>
              <div className="icon-child-text">
                <h5>A complete guide to get started</h5>
                <p>Best tips, guidelines, advice, and recommendations for successful practice</p>
              </div>
            </div>

        </div>
        </div>
      </div>
    </section>
  )
}


export default Checkout