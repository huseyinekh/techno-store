import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomeContainer from "./containers/home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
};

export default App;
