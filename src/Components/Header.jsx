import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import logo from "../logo.jpg";

// import {FaBeer} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header">
      <img
        className="menu-icon"
        src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        alt=""
      />
      <img className="logo-icon" src={logo} alt="news logo" />
      <img
        className="search-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLL3US_9kedP3tGyEM2behM09DIO31rofcQ&usqp=CAU"
        alt=""
      />
    </div>
  );
};

export default Header;
