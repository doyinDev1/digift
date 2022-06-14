import React from 'react'
import classes from './Footer.module.css'
import DigiftLogo from '../../img/DigiftLogo.png'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Arrow from '../../img/Vector 328.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterTop}>
        <div className={classes.FooterFirst}>
          <div className={classes.FooterLogo}>
            <img
              src={DigiftLogo}
              alt="digift" />
          </div>
          <div className={classes.FooterLogo2}>
            <span>Creating Happiness One Giftcard at a Time.</span>
          </div>
          <div className={classes.Socials}>
            <div className={classes.Icon}>
              <InstagramOutlined />
            </div>
            <div className={classes.Icon}>
              <FacebookOutlined />
            </div>
            <div className={classes.Icon}>
              <TwitterOutlined />
            </div>
            <div className={classes.Icon}>
              <LinkedinOutlined />
            </div>
          </div>
        </div>
        <div className={classes.FooterSecond}>
          <div className={classes.FooterLogo2}>
            <span>Contact Us</span>
          </div>
          <div className={classes.FooterLogo21}>
            <span>Hello@digift.com</span>
          </div>
          <div className={classes.FooterLogo2}>
            <span>Office</span>
          </div>
          <div className={classes.FooterLogo21}>
            <span>226, Awolowo road, Ikoyi,<br /> Lagos State, Nigeria</span>
          </div>
          <div className={classes.FooterLogo2}>
            <div className={classes.FooterLogo21}>
              <span>Our Privacy Policyㅤ<ArrowRightOutlined /></span>
              <span>Terms and Conditionㅤ<ArrowRightOutlined /></span>
            </div>
          </div>
        </div>
        <div className={classes.FooterThird}>
          <div className={classes.One}>
            <div className={classes.FooterLogo2}>
              <span>Company</span>
            </div>
            <div className={classes.FooterLogo21}>
              <span>Careers</span>
            </div>
            <div className={classes.FooterLogo21}>
              <span>FAQ</span>
            </div>
          </div>
          <div className={classes.One}>

            <div className={classes.FooterLogo2}>
              <span>Products</span>
            </div>

            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>Personal</span>
              </div>
            </div>
            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>Business</span>
              </div>
            </div>
            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>Vendor</span>
              </div>
            </div>
          </div>
          <div className={classes.One}>
            <div className={classes.FooterLogo2}>
              <span>Contact</span>
            </div>
            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>Instagram</span>
              </div>
            </div>
            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>Twitter</span>
              </div>
            </div>
            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>LinkedIn</span>
              </div>
            </div>
            <div className={classes.Wrap}>
              <div className={classes.FooterLogo21}>
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Polygon}>
          <Link to="#nav">
            <img
              className={classes.ArrowImage}
              src={Arrow}
              alt="arrow" />
          </Link>
        </div>
        <div>
          <div className={classes.FooterText}>
            <span>The website www.digiftng.com is owned and operated by Blinksky Nigeria Limited, a company duly registered under the Laws of the Federal Republic of Nigeria with RC Number: 1656204. Trademark to all logos of Giftcards are owned by their respective brands and Blinksky Nigeria Limited doesn’t claim ownership of these trademarks. All Giftcards dominated in USD are provided in conjunction with BlinkSky Inc. Users must have valid US account and in some cases a valid US address before purchasing.</span>
          </div>
        </div>
      </div>
      <div className={classes.FooterLogo21}>
        <span>Copyright © 2022 Blinksky Nigeria Limited</span>
      </div>
    </div>
  )
}

export default Footer