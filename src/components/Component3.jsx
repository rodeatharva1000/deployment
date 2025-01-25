import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Component1.css";

function Component3() {
      const[height, setheight] = useState(0);
      const[weight, setweight] = useState(0);
      const[res, setres] = useState("");


      const set_weight = (e) => {
        setweight(Number(e.target.value))
      }

      const set_height = (e) => {
        setheight(Number(e.target.value))
      }

      const set_res = (e) =>{
         e.preventDefault();
            let bmi = weight/(height**2);
            if (bmi < 18.5) {
              setres("Underweight");
            } else if (bmi < 25) {
              setres("Normal weight");
            } else if (bmi < 30) {
              setres("Overweight");
            } else if (bmi < 35) {
              setres("Obesity Class I");
            } else {
              setres("Obesity Class II");
            }
      };
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">enter weight</label>
          <input onChange={set_weight} id="id_1" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter height</label>
          <input onChange={set_height}  id="id_2" className="form-control" />
        </div>

        <button onClick={set_res} className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>Result:</div> {res}
    </>
  );
}

export default Component3