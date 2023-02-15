import React from 'react'
import images from '../../constants/images'
import './AboutUs.css'


const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='abou'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="Knife"/>
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
          <p className='p__opensans'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about__knife"/>
        </div>

      </div>
    </div>
  )
}

export default AboutUs