import React from "react";
import "./Aside.scss";
import Pagination from "../Pagination/Pagination";

const Aside = ({ php }) => {
    return (
        <>
            <div className="aside">
                <div className="container-fluid">
                    <div className="aside__hero">
                        <div className="aside__cards">
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                            <div className="aside__card">
                                <img src={php} alt="" className="aside--book" />
                                <div className="aside__text">
                                    <h5 className="aside--title">PHP</h5>
                                    <p className="aside--name">David M. Beazley</p>
                                    <p className="aside--year">2002</p>
                                </div>
                                <div className="aside__buttons">
                                    <button className="aside--btn1">Bookmark</button>
                                    <button className="aside--btn2">More Info</button>
                                    <button className="aside--btn3">Read</button>
                                </div>
                            </div>
                        </div>
                        <div className="aside__pagination">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aside;
