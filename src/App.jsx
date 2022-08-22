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

const App = () => {
  return (
    <>
      <Login logo={Logo} user={User} lock={Lock} />
      <Main main_logo={MainLogo} search={Search} mode={Mode} />
    </>
  );
};

export default App;
