import React from 'react'
import classes from './BusinessFeature.module.css'
import FeatureImage from '../../img/Image.png'
const FeatureCard2 = () => {
    // console.log(text.text, "dss")
  return (
    <div className={classes.FeatureCard}>
        <div className={classes.FeatureText}>
        <h1>Features that <br/> <span>empowers</span>  your <br/>business. </h1>
        <p>Automate your sales and marketing so you can focus on <br/>other areas of your business.ably.</p>
        <div className={classes.FeatureImage}>
<img
src={FeatureImage}
alt="digift feature"/>
        </div>
        </div>
    </div>
  )
}

export default FeatureCard2