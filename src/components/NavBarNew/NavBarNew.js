import React, { useContext } from 'react';
import DigiftLogo from '../../img/DigiftLogo.png'
import { Switch } from 'antd';
import { DarkModeContext } from '../../context/DarkModeContext';
import classes from './NavBarNew.module.css'
import { ReactComponent as ReactLogo } from '../../img/sparkles.svg';
import { Link } from "react-router-dom";
import { Button, Tooltip } from 'antd';
import { UserOutlined, SearchOutlined,CloseOutlined,CheckOutlined  } from '@ant-design/icons';
import { Input } from 'antd';
const NavBarNew = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }
  console.log(darkMode)
  return (

    <div className={classes.Nav} id="nav">
      <div
        className={classes.Logo}

      >
        < Link to="/">
        
        <img
          src={DigiftLogo}
          alt="digift"
          className={classes.Logo}
        />
        </Link>
      </div>
      <div className={classes.NavLink}>
        <div className={classes.NavLinks}>
        <Link to="/">
         <h6>Personal &gt;</h6>
         
         </Link> 
        </div>
        <div className={classes.NavLinks}>
         <Link to="/business">
         <h6>Business &gt;</h6>
         
         </Link> 
        </div>

      </div>
      <div className={classes.Search}>
        <Input size="large" placeholder="Find cards anywhere" prefix={<SearchOutlined />} />

      </div>
<div className={classes.Switch}>

<Switch
onClick={handleClick}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
</div>
<div className={classes.NavLinks}>
          <h6>Login &gt;</h6>
        </div>
        <div className={classes.Button}>

        <Button type="primary">
      Get Startedㅤ
      <ReactLogo />
    </Button>
        </div>

    </div>



  )
}

export default NavBarNew
