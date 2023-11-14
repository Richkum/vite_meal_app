import React from "react";
import { Link } from "react-router-dom";
import "./Latest.css";
import Axios from "axios";
import { useQuery } from "react-query";
import LandingPage from "../landingpage/Landing";
import PopurlarCat from "../popular/PopurlarCat";
import FavouriteCat from "../favourites/FavouriteCat";
import FormSide from "../form/Form";
import FooterSise from "../footer/Footer";

const LatestFoods = () => {
  const Url_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const { data } = useQuery({
    queryKey: ["keyy"],
    queryFn: async () => {
      return await Axios.get(Url_API).then((res) => res.data);
    },
  });

  return (
    <>
      <LandingPage />
      <PopurlarCat />
      <FavouriteCat />
      <div className="latest-recipe">
        <h1 className="hh1">Latest Recipe</h1>
        <div className="latest">
          {data ? (
            <>
              {data.meals?.map((ele) => (
                <div className="late">
                  <Link to="/Describeland">
                    <img className="recip-img" src={ele.strMealThumb} alt="" />
                  </Link>
                  <Link to="/Describeland">
                    <h4 className="camel">{ele.strMeal}</h4>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div>Sorry And E rro Ocuured</div>
          )}
        </div>
      </div>
      <FormSide />
      <FooterSise />
    </>
  );
};

export default LatestFoods;
