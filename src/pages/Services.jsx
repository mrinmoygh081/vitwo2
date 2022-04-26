import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadcamProps from '../components/master/BreadcamProps'

const About = () => {
  return (
    <div>
      <Header />
      <BreadcamProps heading="SERVICES" subheading="OUR CORE VALUES" navitem1="Home" navitem2="Services"/>
      
      <Footer />
    </div>
  )
}

export default About