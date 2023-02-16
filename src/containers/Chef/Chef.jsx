import React from 'react'
import './Chef.css'
import images from '../../constants/images'
import { SubHeading } from '../../components'


const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className='app__wrapper_img app__wrapper_img-reverse'>
            <img src={images.chef} alt="chef"/>
        </div>

        <div className='app__wrapper_info'>
            <SubHeading title="Chef's Word"/>
            <h1 className='headtext__cormorant'>What the Belive In</h1>

            <div className='app__chef-content'>
                <div className='app__chef-content_quote'>
                    <img src={images.quote} alt="quote"/>
                    <p className='p__opensans'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <p className='p__opensans'>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            
            <div className='app__chef-sign'>
                <p>Kevin Luo</p>
                <p className='p__opensans'>Chef & founder</p>
                <img src={images.sign} alt="sign" />
            </div>

        </div>
    </div>
  )
}

export default Chef