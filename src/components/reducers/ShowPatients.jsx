import React from "react";
import { useCustomContext } from "../CustomContext/CustomContext";

const ShowPatients = () => {
  const [state, dispatch] = useCustomContext();
  console.log(state);
  return (
    <div>
      <h1>show patients</h1>
      {state.patients &&
        state.patients.length !== 0 &&
        state.patients.map((p) => {
          const { id, name, phone, age } = p;
          return (
            <div
              key={id}
              style={{
                border: "1px solid white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h6 style={{ textAlign: "left", color: "red" }}>{id}</h6>
              <p>
                <strong>name: </strong>
                {name}
              </p>
              <p>
                <strong>age: </strong> {age}
              </p>
              <p>
                <strong>phone: </strong>
                {phone}
              </p>
              <button onClick={() => dispatch({ type: "REMOVE_PATIENT", id })}>
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ShowPatients;
