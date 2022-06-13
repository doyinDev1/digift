import React from 'react'
import classes from './Merchant.module.css'
import { ReactComponent as Sparkle2 } from '../../img/wide.svg';
import { ReactComponent as GifSvg } from '../../img/Gif.svg';
import { ReactComponent as LineSvg } from '../../img/Vector 337.svg';

import Disk from '../../img/Gif.png'
const Merchant = () => {
    return (
        <div className={classes.Merchant}>
            <div className={classes.RectBlue}>
                <div className={classes.Container}>
                    <div className={classes.ContainText}>
                        <Sparkle2 />ㅤ
                        <span>Digift helps businesses </span>
                    </div>
                    <div className={classes.Diskdiv}>
                        <h1>Why do fast-growing <br />  merchant and vendor <br /> choose <span> <img src={Disk} alt="er" /></span> us</h1>
                        <p>Whether you’re a business looking to sell your own gift cards, a <br /> company looking for bulk gift card solution, digift is for you.</p>
                        <div>
                            <p>Create an account today</p>
                            <LineSvg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchant