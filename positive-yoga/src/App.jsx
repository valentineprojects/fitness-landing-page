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
      <Checkout />
      <Reviews />
      <Features />
      <Faq />
      <Checkout />
    </>
    
  )
}

export default App