import React from 'react'
import classes from './Hero.module.css'
import AmazonCard from '../../img/Frame 43174.png'
import CreditCard from '../../img/Frame 43168.png';
import { ReactComponent as SpiralRight } from '../../img/Vector 334.svg';
import { ReactComponent as SpiralLeft } from '../../img/Vector 335.svg';

const Hero = () => {
    return (
        <div className={classes.Hero} id="hero">
            <div className={classes.RectBlue}>
                <div>
                    <img
                        src={AmazonCard}
                        alt="amazon"
                        className={classes.ImageLeft}
                    />
                </div>
                <div className={classes.HeroText}>
                    <div className={classes.Top}>
                        <SpiralRight style={{ marginRight: "40px" }} />
                        <h1>Eliminate bank</h1><br />
                        <SpiralLeft style={{ marginLeft: "40px" }} />
                    </div>
                    <div className={classes.Top}>
                        <h1>restriction with our</h1><br />
                    </div>
                    <div className={classes.Top}>
                        <h1>unique gift cards.</h1>
                    </div>
                    <div className={classes.Top} >
                        <span>Shop on Amazon, ASOS, 1800 flowers, Whilst <br />paying for utilies and even more.</span>
                    </div>
                    <div className={classes.Top}>
                        <div style={{ paddingTop: "40px" }}>
                            <div className={classes.ShopDiv} >
                                <span>Start Shopping</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={CreditCard}
                        alt="amazon"
                        className={classes.ImageRight}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
