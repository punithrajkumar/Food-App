import React from "react";
import { Navbar, Image } from "react-bootstrap";

import "./Header.scss";
import Mealsbanner from "../../Assets/Mealsbanner.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <Navbar>
        <h1>Happy Meal!</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </Navbar>
      <div className="mealsBanner">
        <Image src={Mealsbanner} alt="Image of Meals"></Image>
      </div>
    </div>
  );
};

export default Header;
