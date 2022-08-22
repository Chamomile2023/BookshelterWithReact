import React from "react";
import './MainBody.scss'

const MainBody = ({ openBook, deleteBtn, php }) => {
    return (
        <>
            <main className="main">
                <div className="container-fluid">
                    <div className="main__hero">
                        <div className="main__sidebar">
                            <h3 className="main--title">Bookmarks</h3>
                            <p className="main--text">If you don’t like to read, you haven’t found the right book</p>
                            <div className="main__bookmarks">
                                <div className="main__chosen">
                                    <div className="main__chosen__text">
                                        <h5 className="main__chosen--title">PHP</h5>
                                        <p className="main__chosen--name">David M. Beazley</p>
                                    </div>
                                    <div className="main__chosen__icons">
                                        <a href="#" className="main__chosen--link"> <img src={openBook} alt="" className="main__chosen--open" /></a>
                                        <a href="#" className="main__chosen--link"><img src={deleteBtn} alt="" className="main__chosen--delete" /></a>
                                    </div>
                                </div>
                                <div className="main__chosen">
                                    <div className="main__chosen__text">
                                        <h5 className="main__chosen--title">PHP</h5>
                                        <p className="main__chosen--name">David M. Beazley</p>
                                    </div>
                                    <div className="main__chosen__icons">
                                        <a href="#" className="main__chosen--link"> <img src={openBook} alt="" className="main__chosen--open" /></a>
                                        <a href="#" className="main__chosen--link"><img src={deleteBtn} alt="" className="main__chosen--delete" /></a>
                                    </div>
                                </div>
                                <div className="main__chosen">
                                    <div className="main__chosen__text">
                                        <h5 className="main__chosen--title">PHP</h5>
                                        <p className="main__chosen--name">David M. Beazley</p>
                                    </div>
                                    <div className="main__chosen__icons">
                                        <a href="#" className="main__chosen--link"> <img src={openBook} alt="" className="main__chosen--open" /></a>
                                        <a href="#" className="main__chosen--link"><img src={deleteBtn} alt="" className="main__chosen--delete" /></a>
                                    </div>
                                </div>
                                <div className="main__chosen">
                                    <div className="main__chosen__text">
                                        <h5 className="main__chosen--title">PHP</h5>
                                        <p className="main__chosen--name">David M. Beazley</p>
                                    </div>
                                    <div className="main__chosen__icons">
                                        <a href="#" className="main__chosen--link"> <img src={openBook} alt="" className="main__chosen--open" /></a>
                                        <a href="#" className="main__chosen--link"><img src={deleteBtn} alt="" className="main__chosen--delete" /></a>
                                    </div>
                                </div>
                                <div className="main__chosen">
                                    <div className="main__chosen__text">
                                        <h5 className="main__chosen--title">PHP</h5>
                                        <p className="main__chosen--name">David M. Beazley</p>
                                    </div>
                                    <div className="main__chosen__icons">
                                        <a href="#" className="main__chosen--link"> <img src={openBook} alt="" className="main__chosen--open" /></a>
                                        <a href="#" className="main__chosen--link"><img src={deleteBtn} alt="" className="main__chosen--delete" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main__aside">
                            <div className="main__cards">
                                <div className="main__card">
                                    {/* <img src={php} alt="" className="main--book" /> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainBody;
