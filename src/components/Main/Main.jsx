import React from "react";
import Header from "../Header/Header";
import HeaderMiddle from "../Header/HeaderMiddle";
import MainBody from "../MainBody/MainBody";

const Main = ({
  main_logo,
  search,
  mode,
  calendar,
  openBook,
  deleteBtn,
  php,
  data,
}) => {
  return (
    <>
      <Header main_logo={main_logo} search={search} mode={mode} />
      <HeaderMiddle calendar={calendar} />
      <MainBody
        openBook={openBook}
        deleteBtn={deleteBtn}
        php={php}
        data={data}
      />
    </>
  );
};

export default Main;
