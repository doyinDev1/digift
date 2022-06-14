import React from 'react'
import classes from './BusinessFeature.module.css'
import FeatureCard from './FeatureCard'
import FeatureCard2 from './FeatureCard2'
const BusinessFeature = () => {
    return (
        <div className={classes.BusinessFeature}>
            <div className={classes.Feat}>
                <div className={classes.Left}>
                    <FeatureCard />
                </div>
                <div className={classes.Right}>
                    <FeatureCard2 />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default BusinessFeature