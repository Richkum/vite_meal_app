import React, { useState } from "react";
import "./Popular.css";
import Axios from "axios";
import { useQuery } from "react-query";

const PopurlarCat = () => {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data } = useQuery({
    queryKey: ["anyyy"],
    queryFn: async () => {
      return await Axios.get(API_URL).then((res) => res.data);
    },
  });

  return (
    <>
      <div className="popular-cat">
        <h1 className="hh1">Popular Categories</h1>
        <div className="popular">
          {data ? (
            <>
              {data.categories.map((ele) => (
                <div className="pop1">
                  <img className="pop-img" src={ele.strCategoryThumb} alt="" />
                  <h3 className="pasta">{ele.strCategory}</h3>
                </div>
              ))}
            </>
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PopurlarCat;
