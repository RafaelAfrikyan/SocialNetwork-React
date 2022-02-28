import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <div className="wrap"><Nav />
      <Content /></div>
    </div>
  );
};

export default App;
