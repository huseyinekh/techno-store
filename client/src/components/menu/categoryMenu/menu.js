import React from "react";
import "./menu.css";
const menu = (props) => {
  return (
    <div className="category_menu">
      <div className="header_cat_menu">
        <h3>Category</h3>
      </div>
      <ul>
        <li>game console
        <ul className="category_submenu">
          <li>item 1 </li>
          <li>item 2</li>

        </ul>
        </li>
        <li>Kabrolar</li>
        <li>Nausniler</li>
        <li>IOS qulaqliq</li>
        <li>IOS Adapter</li>
      </ul>
    </div>
  );
};

export default menu;
