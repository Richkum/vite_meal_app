import React from "react";
import "./Dispvid.css";
import { useQuery } from "react-query";
import Axios from "axios";

const DisplayVideo = () => {
  const apiIng = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const mealId = urlParam.get("id");

  const { meals } = useQuery({
    queryKey: ["Keyy"],
    queryFn: async () => {
      return await Axios.get(apiIng).then(
        (res) => res.meals
        // displayVideo(res.meals);
      );
    },
  });
  console.log(meals);
  // function displayVideo(meals) {
  //   meals;
  //   meals.forEach((meal) => {
  //     if (mealId == meal.idMeal) {
  //       const videoURL = meal.strYoutube;
  //       console.log(videoURL);
  //       const splited = videoURL.split("v=");
  //       const videoId = splited[1];
  //       console.log(splited);
  //     }
  //   });
  // }

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
            src="src/assets/images/cheetah-cub.jpg"
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
      <div className="img-div">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/13Z2eU0X8Is?si=jQG5DWybovuBmpN5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default DisplayVideo;
