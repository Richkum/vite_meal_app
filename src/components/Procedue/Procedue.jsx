import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./Procedue.css";
// import { useSearchParams } from "react-router-dom";

const params = new URLSearchParams(document.location.search);
let idd = params.get("id");
console.log(idd);

// function displayDetailsMeals(meals) {
//   const mealContainer = document.querySelector(".ingredients")
//   meals.forEach((meal) => {
//     if (mealId == meal.idMeal) {
//       if (
//         meal.strIngredient1 != "" ||
//         meal.strIngredient1 != null ||
//         meal.strIngredient2 != "" ||
//         meal.strIngredient2 != null ||
//         meal.strIngredient3 != "" ||
//         meal.strIngredient3 != null ||
//         meal.strIngredient4 != "" ||
//         meal.strIngredient4 != null ||
//         meal.strIngredient5 != "" ||
//         meal.strIngredient5 != null ||
//         meal.strIngredient6 != "" ||
//         meal.strIngredient6 != null ||
//         meal.strIngredient7 != "" ||
//         meal.strIngredient7 != null ||
//         meal.strIngredient8 != "" ||
//         meal.strIngredient8 != null ||
//         meal.strIngredient9 != "" ||
//         meal.strIngredient9 != null ||
//         meal.strIngredient10 != "" ||
//         meal.strIngredient10 != null ||
//         meal.strIngredient11 != "" ||
//         meal.strIngredient11 != null ||
//         meal.strIngredient12 != "" ||
//         meal.strIngredient12 != null ||
//         meal.strIngredient13 != "" ||
//         meal.strIngredient13 != null ||
//         meal.strIngredient14 != "" ||
//         meal.strIngredient14 != null ||
//         meal.strIngredient15 != "" ||
//         meal.strIngredient15 != null ||
//         meal.strIngredient16 != "" ||
//         meal.strIngredient16 != null ||
//         meal.strIngredient17 != "" ||
//         meal.strIngredient17 != null ||
//         meal.strIngredient18 != "" ||
//         meal.strIngredient18 != null ||
//         meal.strIngredient19 != "" ||
//         meal.strIngredient19 != null ||
//         meal.strIngredient20 != "" ||
//         meal.strIngredient20 != null
//       )

const ProcedueList = () => {
  const apiIng = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idd}`;

  const { data } = useQuery({
    queryKey: ["Keyy"],
    queryFn: async () => {
      const res = await Axios.get(apiIng);
      return res.data.meals[0];
    },
  });
  console.log(data);

  return (
    <>
      <div className="main">
        <div className="main1">
          <div className="small-div">
            <div className="prep-1">
              <p className="prep">PREP TIME</p>
              <p className="prepp">15 MIN</p>
            </div>
            <div className="prep-1">
              <p className="prep">PREP TIME</p>
              <p className="prepp">15 MIN</p>
            </div>
            <div className="prep-1">
              <p className="prep">SERVINGS</p>
              <div className="note">
                <p className="prepp">4 PEOPLE</p>
                <i className="fa-regular fa-pen-to-square"></i>
              </div>
            </div>
            <div className="prep-4">
              <i className="fa-regular fa-face-grin-stars"></i>
            </div>
          </div>
          <div className="ingredients">
            <h2 className="hh1">Ingredients</h2>
            <div className="ingred-list">
              <h5>For the crust</h5>
              {data ? (
                <>
                  {data?.meals.map((meal) => (
                    <div className="ingred">
                      <i className="fa-regular fa-circle"></i>
                      <p className="ing-p">{meal.strIngredient1}</p>
                    </div>
                  ))}
                </>
              ) : (
                <div>An error occured</div>
              )}
              <h5>For the cheesecaket</h5>
            </div>
          </div>
          <div className="instructions">
            <h2 className="hh1">Instructions</h2>
            <div className="instruct">
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
              <div className="inst">
                <p className="numb">1</p>
                <p>
                  To make this you will have to study for a time period of
                  atleast four years so that you can have the expertise to do it
                  well and do like a pro because the thing no easy pere aswear
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcedueList;
