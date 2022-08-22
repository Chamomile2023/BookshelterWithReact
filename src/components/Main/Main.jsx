import React from "react";

const Main = ({ main_logo, search, mode }) => {
    return <>
        <main className="main">
            <div className="container-fluid">
                <div className="main__hero">
                    <div className="main__logo">
                        <img src={main_logo} alt="" className="main--logo" />
                    </div>
                </div>
            </div>
        </main>
    </>;
};

export default Main;
