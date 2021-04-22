import React, { useReducer } from "react";

const ReducerCount = () => {
  let initialState = {
    count: 0,
    countII: 111,
  };

  function init(initialCount) {
    const { count, countII } = initialCount;
    return { count, countII };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "INCREMENT2":
        return { ...state, countII: state.countII + 1 };
      case "DECREMENT2":
        return { ...state, countII: state.countII - 1 };
      case "RESET":
        return init(action.payload);
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is Reducer Count</h1>
      <h3>Count: {state?.count}</h3>
      <h3>Count2: {state?.countII}</h3>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        Increment
      </button>{" "}
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT2",
          })
        }
      >
        Increment
      </button>{" "}
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT2",
          })
        }
      >
        Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
            payload: initialState,
          })
        }
      >
        reset
      </button>
    </div>
  );
};

export default ReducerCount;
