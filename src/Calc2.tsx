import React, { useReducer, useEffect } from "react";
import "./calc.scss";

const initialState = {
  result: 0,
  temp_result: 0,
  stack: false,
  operator: null
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "digit":
      if (state.stack) {
        const temp_result = state.operator === "=" ? 0 : state.result;
        return {
          result: action.value,
          temp_result,
          stack: false,
          operator: state.operator
        };
      } else {
        return {
          result: Number(`${state.result}${action.value}`),
          temp_result: state.temp_result,
          stack: state.stack,
          operator: state.operator
        };
      }
    case "operator":
      let result;
      switch (state.operator) {
        case "+":
          result = state.temp_result + state.result;
          break;
        case "-":
          result = state.temp_result - state.result;
          break;
        case "x":
          result = state.temp_result * state.result;
          break;
        case "÷":
          result = state.temp_result / state.result;
          break;
        default:
          result = state.result;
      }
      return {
        result,
        temp_result: 0,
        stack: true,
        operator: action.value
      };
    case "clear":
      return initialState;
    default:
      throw new Error();
  }
};

const Calc2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  });

  const operator = state.operator !== "=" ? state.operator : "";
  return (
    <div className="calc">
      <div className="screen2">
        <span className="subsc">{operator}</span>
        {state.result}
      </div>
      <div className="keys clm4">
        <button
          className="key opr clear2"
          onClick={() => dispatch({ type: "clear" })}
        >
          C
        </button>
        <button
          className="key opr"
          onClick={() => dispatch({ type: "operator", value: "÷" })}
        >
          ÷
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
          className="key opr"
          onClick={() => dispatch({ type: "operator", value: "x" })}
        >
          x
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
          className="key opr"
          onClick={() => dispatch({ type: "operator", value: "-" })}
        >
          -
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
          className="key opr"
          onClick={() => dispatch({ type: "operator", value: "+" })}
        >
          +
        </button>
        <button
          className="key zero"
          onClick={() => dispatch({ type: "digit", value: 0 })}
        >
          0
        </button>
        <button
          className="key opr"
          onClick={() => dispatch({ type: "operator", value: "=" })}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calc2;
