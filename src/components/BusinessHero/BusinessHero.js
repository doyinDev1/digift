import React from 'react'
import classes from './BusinessHero.module.css'
import BusinessImg from '../../img/Frame 43268.png'
import { ReactComponent as SparkleSvg } from '../../img/www.svg'
import { ReactComponent as RightSvg } from '../../img/Vector 336.svg'
import { ReactComponent as LeftCurveSvg } from '../../img/Vector 3351.svg'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
const BusinessHero = () => {
    return (
        <div className={classes.BusinessHero}>
            <div className={classes.BusinessHeroWrapper}>
                <div className={classes.Left}>
                    <div className={classes.BusinessText}>
                        <h1>Expand the giftcard <br /> industry, <span>one card</span> <br /> at a time! <SparkleSvg style={{ marginBottom: "15px" }} /></h1>
                        <p className={classes.giftText}>Digift helps businesses connect with customers by letting them offer their business gift cards to a large number of people.</p>
                        <div className={classes.BusinessButton}>
                            <Button type="primary">
                                Get Startedㅤ<ArrowRightOutlined />
                            </Button>
                            <Button >
                                Sign Inㅤ
                                <ArrowRightOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}>
                    <LeftCurveSvg style={{ position: "relative", left: "20px", bottom: "60px" }} />
                    <img
                        src={BusinessImg}
                        alt="digift"
                    />
                    <RightSvg style={{ position: "relative", right: "20px", bottom: "60px" }} />
                </div>
            </div>
        </div>
    )
}

export default BusinessHero