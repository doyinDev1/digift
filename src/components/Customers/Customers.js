import React from 'react'
import classes from './Customers.module.css'
import CustomersCard from './CustomerCard'
import * as data from '../../data/data'
import { ReactComponent as SpiralLeft } from '../../img/Vector 335.svg';

const Customers = () => {
    const customerText = data?.customercard
    return (
        <div className={classes.Customers}>
            <div className={classes.CustomersTop}>
                <h1>“Hear what happy customers<br /> are saying about Digift”</h1>
            </div>
            <div className={classes.Card}>
                {
                    customerText?.customer.map((customer) => (
                        <div key={customer.id} className={classes.Box}>
                            <CustomersCard
                                customer={customer}
                                id={customer.id}
                                text={customer.text}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={classes.Bottom}>

                <div className={classes.CustomerBottom}>
                    <h1> Create happiness <br />from buying a gift<br /> card today. <SpiralLeft /></h1>
                </div>
            </div>
        </div>
    )
}

export default Customers