import React from 'react'
import BusinessHero from '../../components/BusinessHero/BusinessHero';
import Footer from '../../components/Footer/Footer';
import NavBarNew from '../../components/NavBarNew/NavBarNew';
const BusinessHomePage = () => {
  return (
    <div>
      <NavBarNew/>
     <BusinessHero/>
      <Footer/>
    </div>
  )
}

export default BusinessHomePage