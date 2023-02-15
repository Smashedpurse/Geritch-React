import React from 'react'
import images from '../../constants/images'


const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>

      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcomeImage"/>
      </div>
    </div>
  )
}

export default Header