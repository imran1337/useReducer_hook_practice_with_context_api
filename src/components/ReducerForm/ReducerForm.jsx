import React, { useReducer } from "react";

const ReducerForm = () => {
  const initialState = {
    name: "",
    userName: "",
    email: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE INPUT TEXT":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "INIT":
        return {
          name: "",
          userName: "",
          email: "",
          password: "",
        };
      default:
        throw new Error();
    }
  };
  const init = () => {
    // dispatch({
    //   type: "INIT",
    // });
  };

  const [state, dispatch] = useReducer(reducer, initialState, init);
  const updateFormState = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <>
      <h3>{state?.name}</h3>
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => {
              console.log({ state });
              updateFormState(e);
            }}
            value={state?.name}
            style={{ display: "block", margin: "5px", padding: "10px" }}
          />
          <input
            type="text"
            placeholder="userName"
            name="userName"
            value={state?.userName}
            onChange={(e) => {
              console.log({ state });
              updateFormState(e);
            }}
            style={{ display: "block", margin: "5px", padding: "10px" }}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={state?.email}
            onChange={(e) => {
              console.log({ state });
              updateFormState(e);
            }}
            style={{ display: "block", margin: "5px", padding: "10px" }}
          />
          <input
            type="text"
            name="password"
            value={state?.password}
            placeholder="password"
            onChange={(e) => {
              console.log({ state });
              updateFormState(e);
            }}
            style={{ display: "block", margin: "5px", padding: "10px" }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(state);
              init();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReducerForm;
