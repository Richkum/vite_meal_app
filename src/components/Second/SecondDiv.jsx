import React from "react";
import "./Second.css";

const SecondDiv = () => {
  return (
    <>
      <div className="sec-2">
        <nav className="navv">
          <div className="navv1">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <p className="p">85% will make this again</p>
          </div>
          <div className="navv2">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            <i className="fa-regular fa-bookmark" id="favorite"></i>
          </div>
        </nav>
        <h2 className="h1"></h2>
        <div className="msglog">
          <img
            className="imgtxt"
            src="./public/images/cheetah-cub.jpg"
            alt=""
          />
          <p className="txt">Tricia Albet</p>
          <div className="one">
            <div className="comt-div">
              <i className="fa-regular fa-calendar-minus"></i>
              <p className="txt" id="tx">
                Yesterday
              </p>
            </div>
            <div className="yest-div">
              <i className="fa-regular fa-message"></i>
              <p className="txt">20</p>
            </div>
          </div>
          <div className="stars">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
        <hr />
        <p className="p">
          One i learned living in the canarise section of Broklyn,Ny has to cook
          a good Italian meal. Here is a recipe i created after having this dish
          in a resturant
        </p>
      </div>
    </>
  );
};

export default SecondDiv;
