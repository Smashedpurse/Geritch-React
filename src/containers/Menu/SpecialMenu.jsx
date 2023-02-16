import React from "react";
import "./SpecialMenu.css";
import { SubHeading, MenuItem} from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>


      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem Key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-cocktails flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktails, index) => {
              return <p>{cocktails.title}</p>;
            })}
          </div>
        </div>
      </div>

      <div style={{ margin: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
