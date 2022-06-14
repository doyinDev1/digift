import React from 'react'
import classes from './BusinessTop.module.css'
import ApiImg from '../../img/Frame 43280.png'
import { Button } from 'antd'
import { ReactComponent as SparkleSvg } from '../../img/www.svg'
import BusinessImg from '../../img/Frame 43268.png'
import { ArrowRightOutlined } from '@ant-design/icons'
import { ReactComponent as RightSvg } from '../../img/Vector 336.svg'
import { ReactComponent as LeftCurveSvg } from '../../img/Vector 3351.svg'
const BusinessTop = () => {
  return (
    <div className={classes.ApiDiv}>
      <div className={classes.ApiLeft}>
        <div className={classes.Text}>
          <h1>Expand the giftcard <br /> industry, <span>one card</span> <br /> at a time! <SparkleSvg style={{ marginBottom: "15px" }} /></h1>
          <p className={classes.giftText}>Digift helps businesses connect with customers by letting them <br /> offer their business gift cards to a large number of people.</p>
        </div>
        <div className={classes.Button}>
          <Button type="primary">
            Get Started<ArrowRightOutlined />
          </Button>
          <Button type="text" style={{ color: "var(--grey)" }}>
            Sign In <ArrowRightOutlined />
          </Button>
        </div>
      </div>
      <div className={classes.ApiRight}>
        <LeftCurveSvg className={classes.svg}  />

        <img
          src={BusinessImg}
          alt="digift"
          className={classes.Image}
        />
        <RightSvg className={classes.svg} />

      </div>
    </div>
  )
}

export default BusinessTop