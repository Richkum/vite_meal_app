import React from "react";
import DisplayVideo from "../Dispvideo/DisplayVideo";
import "./Land.css";
import ProcedueList from "../Procedue/Procedue";
import SimilarCat from "../similar/SimilarCat";

const LandDescribe = () => {
  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <div className="nav1">
            <img className="nav-img1" src="./public/images/Logo 2.png" alt="" />
          </div>
          <div className="nav2">
            <select name="" id="select">
              <option value="">Homepage</option>
            </select>
            <select name="" id="select">
              <option value="">Recipepage</option>
            </select>
            <select name="" id="select">
              <option value="">Pages</option>
            </select>
            <select name="" id="select">
              <option value="">Buy</option>
            </select>
          </div>
          <div className="nav3">
            <i className="fa-solid fa-magnifying-glass"></i>
            <img
              className="nav-img2"
              src="./public/images/cheetah-cub.jpg"
              alt=""
            />
          </div>
        </nav>
      </div>
      <DisplayVideo />
      <ProcedueList />
      <SimilarCat />
    </>
  );
};

export default LandDescribe;
