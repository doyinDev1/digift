import React, { useState } from 'react'
import classes from './Arrival.module.css'
import { Checkbox, Button } from 'antd';
import * as data from '../../data/data'
import GiftCards from '../GiftCards/GiftCards';
import { ArrowRightOutlined } from '@ant-design/icons';

const Arrival = () => {
    const [show, setShow] = useState(0)
    const [show2, setShow2] = useState(false)

    const handleClick = (e) => {
        console.log(show, e)
        setShow(true)
        setShow2(true)
        sessionStorage.setItem("opened", "open")
    }
    console.log(show, "show va")
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

                        {
                            show === true &&
                            <>

                                <GiftCards />
                                <GiftCards />
                            </>

                        }
                    </div>
                    <div className={classes.ArrivalMain}>
                        <GiftCards />
                        <GiftCards />
                        {
                            show === true &&
                            <>

                                <GiftCards />
                                <GiftCards />
                            </>

                        }
                        
                    </div>
                    <div className={classes.ArrivalMain}>
                        <GiftCards />
                        <GiftCards />
                        {
                            show === true &&
                            (
                                <>
                                    <GiftCards />
                                    <GiftCards />
                                </>
                            )
                        }
                    </div>

                </div>

            </div>
            {
                show === true ?
                    (
                        ""
                    ) :
                    <div className={classes.BuutonDiv}>
                        <div className={classes.ButtonLoad1}>
</div>                      <div className={classes.ButtonLoad2}>
</div>                      <div className={classes.ButtonLoad3}>

                            <Button className={classes.Button} onClick={handleClick}>Load more products <ArrowRightOutlined /></Button>
</div>
                        <div className={classes.ButtonLoad4}>
                        </div>
                    </div>
            }
{
    show2 === true ? 
    (
        <div className={classes.BuutonDiv}>
                        <div className={classes.ButtonLoad1}>
</div>                      <div className={classes.ButtonLoad2}>
</div>                      <div className={classes.ButtonLoad3}>

                            <span className={classes.Span} >End of product list </span>
</div>
                        <div className={classes.ButtonLoad4}>
                        </div>
                    </div>
    ): ""
}
{/* {

JSON.stringify(sessionStorage.getItem("opened")) == "open" ? (
    <div className={classes.BuutonDiv}>
    <div className={classes.ButtonLoad1}>
</div>                      <div className={classes.ButtonLoad2}>
</div>                      <div className={classes.ButtonLoad3}>

        <span className={classes.Butt}>End of Product list <ArrowRightOutlined /></span>
</div>
    <div className={classes.ButtonLoad4}>
    </div>
</div>
): ""
} */}
            
        </>
    )
}

export default Arrival