import React from 'react'
import './Footer.css'
import {Newsletter,FooterOverlay} from '../../components'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
        <Newsletter/>
        <FooterOverlay/>

        <div className='app__footer-links'>
            <div className='app__footer-links-contact'>

            </div>
            <div className='app__footer-links_logo'>

            </div>
            <div className='app__footer-links-work'>

            </div>
        </div>

        <div className='footer__copyryght'>
            <p className='p__opensans'>
            2021 Gerícht. All Rights reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer