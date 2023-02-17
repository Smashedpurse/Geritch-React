import React from 'react'
import './Gallery.css'
import { SubHeading } from "../../components";
import images from "../../constants/images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';



const scroll =(direction) =>{
    const {current} = scrollRef;

    if(direction === 'left'){
        current.scrollLeft -=300;
    }else{
        current.scrollLeft +=300;
    }
}

const GalleryImages=[images.gallery01,images.gallery02,images.gallery03,images.gallery04];

const Gallery = () => {

    const scrollRef =  React.useRef(null);

    return (
    <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
            <SubHeading title="Instagram"/>
            <h1 className='headtext__cormorant'>Photo Gallery</h1>
            <p className='p__opensans' style={{color:'#AAA',margin:'2rem'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <button type='button' className='custom__button'>View More</button>
        </div>

        <div className='app__galley-images'>
            <div className='app__gallery-iamges_container' ref={scrollRef}>
                {GalleryImages.map((image,index)=>(
                    <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                        <img src={image} alt="GalleryImage" />
                        <BsInstagram className='Gallery__image-icon'/>
                    </div>
                ))}
            </div>
            <div className='app__gallery-images_arrow'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery