import React, { useContext } from 'react';
import DigiftLogo from '../../img/DigiftLogo.png'
import { Switch } from 'antd';
import classes from './NavBarNew.module.css'
import { ReactComponent as ReactLogo } from '../../img/sparkles.svg';
import { Link } from "react-router-dom";
import { Button, Tooltip } from 'antd';
import { SearchOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ReactComponent as Hamburger } from '../../img/hamburger.svg'
import { useState } from 'react'
const NavBarNew = () => {
  const handleClick = (checked) => {
    if (checked == true) {
      document.documentElement.style.setProperty('--white', '#000');
      document.documentElement.style.setProperty('--grey', '#F3F4F7');
      document.documentElement.style.setProperty('--lightgrey', '#0069E0');
      document.documentElement.style.setProperty('--blue2', '#ffffff');
      document.documentElement.style.setProperty('--navyblue', '#ffffff');

    }
    if (checked == false) {
      document.documentElement.style.setProperty('--white', '#ffffff');
      document.documentElement.style.setProperty('--grey', '#8A91A8');
      document.documentElement.style.setProperty('--lightgrey', '#F3F4F7');
      document.documentElement.style.setProperty('--blue2', '#0069E0');
      document.documentElement.style.setProperty('--navyblue', '#000429');
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className={classes.Nav} id="nav">
      <div
        className={classes.Logo}
      >
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><img
              src={DigiftLogo}
              alt="digift"
              className={classes.Logo}
            /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={classes.NavLin}>
              <div className={classes.NavLin}>
                <Link to="/">
                  <h6>Personal &gt;</h6>
                </Link>
              </div>
              <div className={classes.NavLin}>
                <Link to="/business">
                  <h6>Business &gt;</h6>
                </Link>
              </div>
            </div>
            <div className={classes.Sear}>
              <Input size="large" placeholder="Find cards anywhere" prefix={<SearchOutlined />} />

            </div>
            <div className={classes.Swit}>

              <Switch
                onChange={handleClick}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </div>

            <div className={classes.NavLin}>
              <h6>Login &gt;</h6>
            </div>
            <div className={classes.Butt}>
              <Button type="primary">
                Get Startedㅤ
                <ReactLogo />
              </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        < Link to="/">
          <img
            src={DigiftLogo}
            alt="digift"
            className={classes.Logo}
          />
        </Link>
        <div className={classes.Hamburger} >
          <Hamburger onClick={handleShow} />
        </div>
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
          onChange={handleClick}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
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
