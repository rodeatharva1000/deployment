import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Component1.css";

function Component2() {
  const [get, setget] = useState(0);
  const [res, setres] = useState(0);
  
  const handlechange = (e) =>{
    setget(parseFloat(e.target.value));
  }
  const calculateResult = (e) =>{
    setres(get*0.61)
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Enter 1</label>
          <input
            type="number"
            onChange={handlechange}
            className="form-control"
          />
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={calculateResult}>Submit</button>
      </form>
      <div className="mt-3">
        <strong>Result:</strong> {res}
      </div>
    </>
  );
}

export default Component2