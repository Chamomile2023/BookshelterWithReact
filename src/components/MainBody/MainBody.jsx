import React from "react";
import { useEffect, useState } from "react";
import "./MainBody.scss";
import Sidebar from "../Sidebar/Sidebar";
import Aside from "../Aside/Aside";

const MainBody = ({ openBook, deleteBtn, php }) => {
  const [data, setData] = useState([]);
  //URL
  const URL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

  //fetch
  const getData = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    setData(response);
  };

  //useEffect
  useEffect(() => {
    getData();
  }, []);
  console.log("DATA" + data);
  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="main__hero">
            <div className="main__sidebar">
              <Sidebar openBook={openBook} deleteBtn={deleteBtn} />
            </div>
            <div className="main__aside">
              <Aside php={php} data={data} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainBody;
