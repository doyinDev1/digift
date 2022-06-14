import React from 'react'
import classes from './ApiDiv.module.css'
import ApiImg from '../../img/Frame 43280.png'
import { Button } from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
const ApiDiv = () => {
  return (
    <div className={classes.ApiDiv}>
        <div className={classes.ApiLeft}>
<div className={classes.Text}>
<h1>Our API is built to<br/> be as <span>lightweight</span><br/> and efficient as <br/>possible.</h1>
<p>We offer client and server libraries in everything from our API</p>
</div>
<div className={classes.Button}>
<Button size='large' type="primary">
    Get Started<ArrowRightOutlined />
</Button>
<Button size='large' type="text" style={{color: "var(--grey)"}}>
    Get Started <ArrowRightOutlined />
</Button>
</div>
        </div>
        <div className={classes.ApiRight}>
<img 
src={ApiImg}
alt="api"
className={classes.Image}
/>
        </div>
    </div>
  )
}

export default ApiDiv