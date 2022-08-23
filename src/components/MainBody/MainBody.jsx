import React from "react";
import "./MainBody.scss";
import Sidebar from "../Sidebar/Sidebar";
import Aside from "../Aside/Aside";

const MainBody = ({ openBook, deleteBtn, php }) => {
  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="main__hero">
            <div className="main__sidebar">
              <Sidebar openBook={openBook} deleteBtn={deleteBtn} />
            </div>
            <div className="main__aside">
              <Aside php={php} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainBody;
