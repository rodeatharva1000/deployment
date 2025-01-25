import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Component1.css";

function Component1() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [selectedOptio, setSelectedOption] = useState("");
  const [res, setres] = useState(0);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const storenum1 = (e) => {
    setnum1(parseFloat(e.target.value));
  };

  const storenum2 = (e) => {
    setnum2(parseFloat(e.target.value));
  };

  const calculateResult = () => {
    let result = 0;
    if (selectedOptio === "option1") {
      result = num1 + num2;
    } else if (selectedOptio === "option2") {
      result = num1 - num2;
    } else if (selectedOptio === "option3") {
      result = num1 * num2;
    } else if (selectedOptio === "option4") {
      result = num2 !== 0 ? num1 / num2 : "Infinity";
    }
    setres(result);
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Enter 1</label>
          <input type="number" onChange={storenum1} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter 2</label>
          <input type="number" onChange={storenum2} className="form-control" />
        </div>

        <div>
          <select onChange={handleChange}className="form-select">
            <option value="">Select an option</option>
            <option value="option1">Addition</option>
            <option value="option2">Subtraction</option>
            <option value="option3">Multiplication</option>
            <option value="option4">Division</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary mt-3" onClick={calculateResult}>Submit</button>
      </form>
      <div className="mt-3">
        <strong>Result:</strong> {res}
      </div>
    </>
  );
}

export default Component1;
