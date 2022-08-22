import React from "react";
import './HeaderMiddle.scss';

const HeaderMiddle = ({ calendar }) => {
  return <><div className="header__middle">
    <div className="container-fluid">
      <div className="header__middle__hero">
        <div className="header__middle__show">
          <span className="header__middle--span">Showing <span className="header__middle--number">18</span> Result <span className="header__middle--all">544</span></span>
        </div>
        <div className="header__middle__calendar">
          <button className="header__middle--btn">Order by newest</button>
          <img src={calendar} alt="calendar" className="header__middle--calendar" />
        </div>
      </div>
    </div>
  </div></>;
};

export default HeaderMiddle;
