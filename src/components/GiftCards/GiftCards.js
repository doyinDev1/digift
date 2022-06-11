import React from 'react'
import classes from './GiftCards.module.css'
import AmazonLogo from '../../img/image 6.png'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const GiftCards = () => {
    return (
        <div className={classes.GiftCard}>

            <div className={classes.badge}>

                <div className={classes.giftcardwrap}>
                    <span>GiftCard</span>
                </div>
            </div>

            <div className={classes.AmazonCard}>
                <div className={classes.cardImg}>

                    <img
                        src={AmazonLogo}
                        alt="giftcard"
                    />
                </div>
                <div className={classes.AmazonText}>

                    <h6>Amazon Gift Card</h6>
                </div>
            </div>
            <div className={classes.AmazonContent}>
                <span>Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....</span>

            </div>
            <hr />
            <div className={classes.Fee}>
                <>

                    <ExclamationCircleOutlined style={{ paddingRight: "10px" }} />
                </>
                <>

                    <span>This card has a fee of $ 0.99</span>
                </>
            </div>
        </div>
    )
}

export default GiftCards