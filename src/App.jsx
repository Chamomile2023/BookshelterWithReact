import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Logo from "./assets/LOGO.svg";
import User from "./assets/user.svg";
import Lock from "./assets/lock.svg";
import MainLogo from "./assets/main_logo.svg";
import Search from "./assets/search.svg";
import Mode from "./assets/mode.svg";
import Calendar from "./assets/calendar.svg";
import OpenBook from "./assets/book-open.svg";
import DeleteBtn from "./assets/delete.svg";
import PHP from "./assets/php.png";
import Close from "./assets/close.svg";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Login logo={Logo} user={User} lock={Lock} />
      <Main
        main_logo={MainLogo}
        search={Search}
        mode={Mode}
        calendar={Calendar}
        openBook={OpenBook}
        deleteBtn={DeleteBtn}
        php={PHP}
      />
    </>
  );
};

export default App;
