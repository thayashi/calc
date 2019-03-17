import React from "react";
import Calc from "./Calc";
import Calc2 from "./Calc2";

const App = () => {
  return (
    <div className="app">
      <div>
        <Calc />
        <span>calc1</span>
      </div>
      <div>
        <Calc2 />
        <span>calc2</span>
      </div>
    </div>
  );
};

export default App;
