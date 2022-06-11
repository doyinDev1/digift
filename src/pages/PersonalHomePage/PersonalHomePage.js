import React from 'react'
import Arrival from '../../components/Arrival/Arrival'
import Hero from '../../components/Hero/Hero'
import NavBarNew from '../../components/NavBarNew.js/NavBarNew'

const PersonalHomePage = () => {
  return (
    <div>
     <NavBarNew/>
      <Hero/>
      <Arrival/>
    </div>
  )
}

export default PersonalHomePage