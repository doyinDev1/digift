import React from 'react'
import BusinessFeature from '../../components/BusinessFeature/BusinessFeature';
import BusinessHero from '../../components/BusinessHero/BusinessHero';
import Footer from '../../components/Footer/Footer';
import Merchant from '../../components/Merchant/Merchant';
import NavBarNew from '../../components/NavBarNew/NavBarNew';
const BusinessHomePage = () => {
  return (
    <div>
      <NavBarNew/>
     <BusinessHero/>
     <Merchant/>
     <BusinessFeature/>
      <Footer/>
    </div>
  )
}

export default BusinessHomePage