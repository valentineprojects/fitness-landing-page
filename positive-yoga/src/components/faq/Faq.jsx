import { useState } from 'react'
import React from 'react'
import './faq.css'
import '../../styles.css'
import { data } from './data.js'
import arrowUpIcon from '../../assets/arrow-up.svg'
import arrowDownIcon from '../../assets/arrow-down.svg'


const Faq = () => {
  
  const [selected, setSelected] = useState(1)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  
  return (
    <section>
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="accordion-container">
      <div className="flex-column accordion">
        {data.map((item, i) => (
          <>
            <div className="accordion-item" onClick={() => toggle(i)}>
              <div className="accordion-title" >
                <h5>{item.question}</h5>
                <img src={selected === i ? arrowUpIcon : arrowDownIcon} alt="arrow icon" />
              </div>
              <div className={selected === i ? 'accordion-content-show' : 'accordion-content'}>
                <p>{item.answer}</p>
              </div>
              </div>
          </>
          
        ))}
      </div> 
      </div>
      <div className='flex-center'>
        <button id='btn-custom' className="btn btn-text btn-size">Get my plan</button>
      </div>
    </section>
  )
}

export default Faq