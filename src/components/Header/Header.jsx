import React from "react";
import './Header.scss';

const Header = ({ main_logo, search, mode }) => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="header__hero">
                        <div className="header__logo">
                            <a href="#" className="header__logo--link"><img src={main_logo} alt="logo" className="header--logo" /></a>
                        </div>
                        <div className="header__input">
                            <img src={search} alt="search" className="header--search" />
                            <input type="text" className="header--input" placeholder="Search books" />
                        </div>
                        <div className="header__buttons">
                            <img src={mode} alt="mode" className="header--mode" />
                            <button className="header--btn">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
