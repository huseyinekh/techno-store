import React, { useState } from "react";
import Classes from "./Layout.module.css";
import { Route, Switch } from "react-router-dom";
//fonts
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
//components
import Menu from "../menu/Menu";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

//containers
import Home from "../../containers/home/Home";
import About from "../../containers/about/about";
import CurrentProd from "../../containers/currentProduct/CurrentProduct";
const Layout = (props) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleClass, setToggleClass] = useState(true);

  function menuHandler() {
    if (toggleMenu) {
      setToggleClass(Classes.Toggle_menu);
      setToggleMenu(false);
    } else {
      setToggleClass("");
      setToggleMenu(true);
    }
  }
  return (
    <Auxiliary>
      <header className={`${Classes.Header} ${toggleClass}`}>
        <div className={Classes.Container}>
          <Menu clickMenuHandler={menuHandler} />
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/currentProduct/:id" component={CurrentProd} />
      </Switch>
      
      <footer className={Classes.Footer}>
        <h4>2020 copyright |huor| </h4>
      </footer>
    </Auxiliary>
  );
};

export default Layout;
