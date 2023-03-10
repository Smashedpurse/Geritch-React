import React from "react";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={"Menu tha fits your Palatte"} />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Bear</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} tags={wine.tags} price={wine.price}/>
            ))}
          </div>
        </div> 

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="MenuIMG" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} tags={cocktail.tags} price={cocktail.price}/>
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop:"15px"}}>
            <button type="button" className="custom__button">View More</button>
      </div>

    </div>
  );
};

export default SpecialMenu;
