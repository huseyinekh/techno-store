import React from "react";
import Classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import "./style.css";
import { FaStream } from "react-icons/fa";

const Menu = (props) => {

  return (
    <div className={Classes.MenuItems}>
      <div
        onClick={props.clickMenuHandler}
        className={Classes.Menu_icon}
      >
        <FaStream cursor="pointer" size={"2rem"} />
      </div>
      <ul className="paths">
        <li>
          {" "}
          <NavLink exact to={{ pathname: "/" }}>
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to={{ pathname: "/about" }}>
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to={{ pathname: "/whishlist" }}>
            WhishList
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to={{ pathname: "/new" }}>
            New
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to={{ pathname: "/bestseller" }}>
            BestSeller
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
