import React from 'react'
import classes from './Arrival.module.css'
import { Checkbox } from 'antd';
import * as data from '../../data/data'
import GiftCards from '../GiftCards/GiftCards';
const Arrival = () => {
    return (
        <>
            <div className={classes.Arrivals}>
                <div className={classes.ArrivalTop}>
                    <h1>Latest Arrivals</h1>
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.ArrivalMain}>

                        <div className={classes.ArrivalSideFilter}>
                            <h6>Filters</h6>
                            <span>Reset</span>
                        </div>
                        <div className={classes.ArrivalSideCategories}>

                            <h6>Categories</h6>
                        </div>

                        {data?.categories.category.map((category) => (
                            <>
                                <div className={classes.Checkbox}>
                                    <Checkbox><h6>{category.category}</h6>
                                    </Checkbox>
                                </div>
                            </>
                        )
                        )}

                    </div>
                    <div className={classes.ArrivalMain}>
                        <GiftCards />
                        <GiftCards />

                    </div>
                    <div className={classes.ArrivalMain}>
                    <GiftCards />
                        <GiftCards />
                    </div>
                    <div className={classes.ArrivalMain}>
                    <GiftCards />
                        <GiftCards />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Arrival