import React from 'react'
import './reviews.css'
import '../../styles.css'
import starIcon from '../../assets/mdi_star.svg'
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'


const Reviews = () => {
  return (
    <section>
      <h3 className='flex-center'>Hear success stories from our clients</h3>
      
    <div className="review-container flex-row flex-center">
      {/* Review 1 */}
      <div className="review flex-column ">
        <div className='review-name'>
          <h5>Emily, 28</h5>
          <p className='grey-opasity'>Delaware, NJ</p>
        </div>
        <div className="review-score flex-row">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
        </div>
        <img className='review-img' src={person1} alt="lady" />
        <p className='review-text'>I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.</p>
      </div>
      {/* Review 2 */}
      <div className="review flex-column ">
        <div className='review-name'>
          <h5>Emily, 28</h5>
          <p className='grey-opasity'>Delaware, NJ</p>
        </div>
        <div className="review-score flex-row">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
        </div>
        <img className='review-img' src={person2} alt="lady red" />
        <p className='review-text'>I will be very straightforward - I hate sports and working out. <strong>Positive Yoga</strong>  put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.</p>
      </div>
      {/* Review 3 */}
      <div className="review flex-column ">
        <div className='review-name'>
          <h5>Emily, 28</h5>
          <p className='grey-opasity'>Delaware, NJ</p>
        </div>
        <div className="review-score flex-row">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
        </div>
        <img className='review-img' src={person3} alt="lady sitting" />
        <p className='review-text'>I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With <strong>Positive Yoga</strong> program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.</p>
          </div>
      </div>
      <div className='flex-center'>
      
      <button className="btn btn-text btn-size">Get my plan</button>
      </div>
      </section>
  )
}

export default Reviews