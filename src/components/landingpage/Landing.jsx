import React from "react";
import "./Landing.css";
import { useQuery } from "react-query";

const LandingPage = () => {
  return (
    <>
      <div className="nav-div">
        <nav>
          <div className="nav1">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="nav2">
            <i className="fa-solid fa-magnifying-glass"></i>
            <button className="btn">Login</button>
          </div>
          <div className="nav3">
            <i className="fa-solid fa-magnifying-glass"></i>
            <img src="/images/Logo.png" alt="" />
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </div>
      <div className="icon">
        <img src="/images/Logo 2.png" alt="" />
      </div>
      <div className="mid-items">
        <p>Homepage</p>
        <p>Recipe Page</p>
        <p>Pages</p>
        <p>Buy</p>
      </div>
      <div className="image">
        <img
          className="main-img"
          src="https://media.istockphoto.com/id/1437043850/photo/apple-combination.jpg?s=2048x2048&w=is&k=20&c=b69CmfeNhFLCvm0CRD04CAsN2ZE_nBBO-g4WQYbwXws="
          alt=""
        />
        <div className="h1">Apple Combination Stock</div>
      </div>
    </>
  );
};

export default LandingPage;
