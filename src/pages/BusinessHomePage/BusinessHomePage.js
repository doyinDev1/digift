import React from 'react'
import ApiDiv from '../../components/ApiDiv/ApiDiv';
import BusinessFeature from '../../components/BusinessFeature/BusinessFeature';
import BusinessHero from '../../components/BusinessHero/BusinessHero';
import BusinessTop from '../../components/BusinessTop/BusinessTop';
import Feature from '../../components/Feature/Feature';
import Footer from '../../components/Footer/Footer';
import Merchant from '../../components/Merchant/Merchant';
import NavBarNew from '../../components/NavBarNew/NavBarNew';
const BusinessHomePage = () => {
  return (
    <div>
      <NavBarNew />
      <BusinessTop/>
      {/* <BusinessHero /> */}
      <Merchant />
      <Feature/>
      {/* <BusinessFeature /> */}
      <ApiDiv />
      <Footer />
    </div>
  )
}

export default BusinessHomePage