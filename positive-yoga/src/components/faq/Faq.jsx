import React from 'react'
import './faq.css'
import '../../styles.css'


const Data = {


}

const Faq = () => {
  return (
    <section>
      <div className="faq-container flex-center">
        <h3>Frequently Asked Questions</h3>
      </div>





      <div className="accordion-section">
        <button className="accordion">
          {/* <p className="accordian-title">{ prop.title}</p> */}
        </button>
        <div className="accordian-content"></div>
      </div>







      <div className='flex-center'>
        <button className="btn btn-text btn-size">Get my plan</button>
      </div>
    </section>
  )
}

export default Faq