import React from "react";
import "./Footer.css";

const FooterSise = () => {
  return (
    <>
      <div class="mob-footer">
        <div class="mob-foot">
          <div class="mob-col1">
            <img class="mob-img" src="./public/images/Logo 2.png"></img>
            <p class="mob-lastp">
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charm of
              pleasure of the moment
            </p>
          </div>
          <select name="" id="select">
            <option class="dropdown">Tastebite</option>
            <option>About Us</option>
            <option>Careers</option>
            <option>Contact Us</option>
            <option>Feedback</option>
          </select>
          <select name="" id="select">
            <option class="dropdown">Legal</option>
            <option>Terms</option>
            <option>Conditions</option>
            <option>Cookies</option>
            <option>Copyright</option>
          </select>
          <select name="" id="select">
            <option class="dropdown">Follow</option>
            <option>Facebook</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>Youtube</option>
          </select>
          <div class="mob-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <p class="lastp">2020 Tatebite-All rights reserved</p>
        </div>
      </div>
      <footer className="footer">
        <div className="foot">
          <div className="col1">
            <img className="last-img" src="/images/Logo 2.png"></img>
            <p className="lastp">
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charm of
              pleasure of the moment
            </p>
          </div>
          <div className="col2">
            <div className="row1">
              <h5>Tastebite</h5>
              <p className="lastp">About us</p>
              <p className="lastp">Careers</p>
              <p className="lastp">Contact Us</p>
              <p className="lastp">Feedback</p>
            </div>
            <div className="row2">
              <h5>Legal</h5>
              <p className="lastp">Terms</p>
              <p className="lastp">Conditions</p>
              <p className="lastp">Cookies</p>
              <p className="lastp">Copyright</p>
            </div>
            <div className="row3">
              <h5>Follow</h5>
              <p className="lastp">Facebook</p>
              <p className="lastp">Twitter</p>
              <p className="lastp">Instagram</p>
              <p className="lastp">Youtube</p>
            </div>
          </div>
        </div>
        <div className="final">
          <div className="fin1">
            <i className="fa-regular fa-copyright"></i>
            <p className="lastp">2020 Tatebite-All rights reserved</p>
          </div>
          <div className="fin2">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSise;
