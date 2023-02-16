import React from "react";
import "./SpecialMenu.css";
import { SubHeading, MenuItem} from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";

console.log(data)

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={"Menu tha fits your Palatte"}/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center" >
          <p className="app__specialMenu_menu_heading">Wine & Bear</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine,index) => (
              <p>{wine.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
