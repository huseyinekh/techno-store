import React, { useEffect } from "react";
import Classes from "./Layout.module.css";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
//components
import Menu from "../menu/Menu";
const layout = (props) => {
  return (
    <Auxiliary>
      <header className={Classes.Header}>
        <div className={Classes.Container}>
          <Menu />
          <div className={Classes.Logo}>
            <h1>HuorTech</h1>
          </div>
          <div className={Classes.Me}>
            <div className={Classes.Search}>
              <BsSearch className={Classes.Icon} />
            </div>
            <div className={Classes.User}>
              <FaUser className={Classes.Icon} />
            </div>
            <div className={Classes.Heart}>
              <BsFillHeartFill className={Classes.Icon} />
            </div>
          </div>
        </div>
      </header>
      {props.children}
      {/* <footer className={Classes.Footer}>
        <h4>2020 copyright |huor| </h4>
      </footer> */}
    </Auxiliary>
  );
};

export default layout;
