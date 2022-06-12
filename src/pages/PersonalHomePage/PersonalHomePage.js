import React from 'react'
import Arrival from '../../components/Arrival/Arrival'
import Customers from '../../components/Customers/Customers'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import NavBarNew from '../../components/NavBarNew.js/NavBarNew'

const PersonalHomePage = () => {
  return (
    <div>
     <NavBarNew/>
      <Hero/>
      <Arrival/>
      <Customers/>
      <Footer/>
    </div>
  )
}

export default PersonalHomePage