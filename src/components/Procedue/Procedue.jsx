import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./Procedue.css";

const ProcedueList = () => {
  const theID = JSON.parse(localStorage.getItem("IDmeal"));
  const [ingredients, setIngredients] = useState([]);

  const { data } = useQuery({
    queryKey: ["ourmeal"],
    queryFn: async () => {
      const response = await Axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i${theID}`
      );
      return response.data.meals[0];
    },
  });

  const createArray = (obj, target_key) => {
    const targett = target_key.length;
    const arrayy = [];
    for (let key of Object.keys(obj)) {
      if (key.slice(0, targett) === target_key && obj[key].trim() !== "") {
        arrayy.push(obj[key]);
      }
    }
    return arrayy;
  };

  useEffect(() => {
    if (data) {
      const arrString = createArray(data, "setIngredients");
      setIngredients(arrString);
    }
    console.log(data);
  }, [data]);

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
              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">400g graham crackers</p>
              </div>
              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">150g unsalted butters, melted</p>
              </div>
              <h5>For the cheesecaket</h5>
              <div className="ingred">
                <i className="fa-regular fa-circle-check"></i>
                <p className="ing-ps">300g mashmallows</p>
              </div>
              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">175g unsalted butter, melted</p>
              </div>
              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">
                  500g philadelphia cream cheese, softened
                </p>
              </div>
              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">250ml thickened/whipping cream, warm</p>
              </div>
              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">3 tbsp powered gelatin + 3 tbsp water</p>
              </div>

              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">5 drops purple food gel</p>
              </div>

              <div className="ingred">
                <i className="fa-regular fa-circle"></i>
                <p className="ing-p">3 drops blue food gel</p>
              </div>
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
