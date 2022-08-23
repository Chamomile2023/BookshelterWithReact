import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ openBook, deleteBtn }) => {
    return (
        <>
            <div className="sidebar">
                <div className="container-fluid">
                    <div className="sidebar__hero">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
