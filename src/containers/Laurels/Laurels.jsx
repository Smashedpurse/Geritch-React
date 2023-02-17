import React from 'react'
import './Laurels.css'
import { SubHeading } from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";

const AwardCard = ({award:{imgUrl,title,subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award"/>
  </div>
);

const Laurels = () => {
  return (
    <div className='app__bg app__wraper section__padding' id='awards'>
      <div className='app__wrapper_info'>
        <SubHeading title="Awards & recognition"/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards'>
          {data.awards.map((award)=> <AwardCard award={award} key={award.title}/>)}
        </div>
      </div>

      <div className='app_wrapper_img'>

      </div>
    </div>
  )

}

export default Laurels