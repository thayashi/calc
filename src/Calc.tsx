import React, { useReducer, useEffect } from "react";
import "./calc.scss";

const initialState = {
  result: 0,
  temp_result: 0,
  cal_mode: null
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "digit":
      if (state.cal_mode) {
        return {
          result: action.value,
          temp_result: state.result,
          cal_mode: null
        };
      } else {
        return {
          result: Number(`${state.result}${action.value}`),
          temp_result: state.temp_result,
          cal_mode: state.cal_mode
        };
      }
    case "operator":
      if (action.value === "+") {
        return {
          result: state.temp_result + state.result,
          temp_result: 0,
          cal_mode: action.value
        };
      } else if (action.value === "c") {
        return initialState;
      }
    default:
      throw new Error();
  }
};

const Calc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  });

  return (
    <div className="calc">
      <div className="screen"> {state.result}</div>
      <div className="keys">
        <button
          className="key opr clear"
          onClick={() => dispatch({ type: "operator", value: "c" })}
        >
          C
        </button>
        <button
          className="key opr plus"
          onClick={() => dispatch({ type: "operator", value: "+" })}
        >
          +
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 7 })}
        >
          7
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 8 })}
        >
          8
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 9 })}
        >
          9
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 4 })}
        >
          4
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 5 })}
        >
          5
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 6 })}
        >
          6
        </button>

        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 1 })}
        >
          1
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 2 })}
        >
          2
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 3 })}
        >
          3
        </button>
        <button
          className="key"
          onClick={() => dispatch({ type: "digit", value: 0 })}
        >
          0
        </button>
      </div>
    </div>
  );
};

export default Calc;
