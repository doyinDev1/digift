import React from 'react'
import classes from './BusinessFeature.module.css'
import FeatureImage from '../../img/Image.png'
const FeatureCard = (text) => {
  return (
    <div className={classes.FeatureCard}>
      <div className={classes.FeatureText}>
        <h1>Designed for <br /> today's <span>ambitious</span> <br />businesses. </h1>
        <p>We give merchants the ability to sell digital Gift Cards for <br />their business quickly, intuitively and affordably.</p>
        <div className={classes.FeatureImage}>
          <img
            src={FeatureImage}
            alt="digift feature"
            className={classes.Image} />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard