import React from "react";
import Header from "../Header/Header";
import HeaderMiddle from "../Header/HeaderMiddle";

const Main = ({ main_logo, search, mode, calendar }) => {
  return (
    <>
      <Header main_logo={main_logo} search={search} mode={mode} />
      <HeaderMiddle calendar={calendar} />
    </>
  );
};

export default Main;
