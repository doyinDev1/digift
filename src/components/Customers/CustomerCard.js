import React from 'react'
import classes from './CustomerCard.module.css'
import Avatar from '../../img/Avatar.png'
const CustomerCard = ({text,customer, id}) => {
    return (
        <div className={classes.CustomerCard}>

            <div className={classes.Card}>
<p>{text}</p>
            <div className={classes.Profile}> 

            
            <div className={classes.Avatar}>
                <img
                src={Avatar}
                alt="avatar"/>
                </div>
                <div className={classes.Details}>
<span>Osemwengie Benjamin</span>
<p>Product Designer at Digift</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard