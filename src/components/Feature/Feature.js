import React from 'react'
import classes from './Feature.module.css'
// import ApiImg from '../../img/Frame 43280.png'
// import { Button } from 'antd'
// import { ReactComponent as SparkleSvg } from '../../img/www.svg'
// import BusinessImg from '../../img/Frame 43268.png'
// import {ArrowRightOutlined} from '@ant-design/icons'
// import { ReactComponent as RightSvg } from '../../img/Vector 336.svg'
// import { ReactComponent as LeftCurveSvg } from '../../img/Vector 3351.svg'
import FeatureCard from '../BusinessFeature/FeatureCard'
import FeatureCard2 from '../BusinessFeature/FeatureCard2'
const Feature = () => {
  return (
    <div className={classes.ApiDiv}>
      <div className={classes.ApiLeft}>
        <FeatureCard />
      </div>
      <div className={classes.ApiRight}>
        <FeatureCard2 />
      </div>
    </div>
  )
}

export default Feature