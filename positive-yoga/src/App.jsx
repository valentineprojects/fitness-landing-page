import React from 'react'
import Checkout from './components/checkout/Checkout.jsx'
import Faq from './components/faq/Faq.jsx'
import Features from './components/features/Features.jsx'
import Header from './components/header/Header.jsx'
import Reviews from './components/reviews/Reviews.jsx'

const App = () => {
  return (
    <>
      <Header />
      <div className='h1-main'>
      <h1>Get access to your yoga program now!</h1>
      </div>
      <Checkout />
      <Reviews />
      <Features />
      <Faq />
      <div className='h2-main'>
        <h2>Start your yoga program today!</h2>
      </div>
      <Checkout />
    </>
    
  )
}

export default App