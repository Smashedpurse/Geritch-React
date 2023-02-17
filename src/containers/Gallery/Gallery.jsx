import React from 'react'
import './Gallery.css'
import { SubHeading } from "../../components";
import images from "../../constants/images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Gallery = () => {


  return (
    <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
            <SubHeading title="Instagram"/>
            <h1 className='headtext__cormorant'>Photo Gallery</h1>
            <p className='p__opensans' style={{color:'#AAA',margin:'2rem'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <button type='button' className='custom__button'>View More</button>
        </div>
    </div>
  )
}

export default Gallery