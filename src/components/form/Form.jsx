import React from "react";
import "./Form.css";

const FormSide = () => {
  return (
    <>
      <div className="btn-div">
        <button className="btn2">Load More</button>
      </div>
      <div className="recomend">
        <div className="form-div">
          <h1 className="hhh">Deliciousness to your inbox</h1>
          <p className="pp">
            Enjoy weekly hand picked recipies and recomendations
          </p>
          <div className="email-div">
            <input type="email" name="email" id="email-inp" />
            <button id="join-btn">Join</button>
          </div>
          <p className="terms">
            by joining our newsletter you agree to our terms and conditions
          </p>
        </div>
      </div>
    </>
  );
};

export default FormSide;
