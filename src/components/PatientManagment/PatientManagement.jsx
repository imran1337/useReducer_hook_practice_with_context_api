import React, { useRef } from "react";
import { useCustomContext } from "./../CustomContext/CustomContext";

const PatientManagement = (props) => {
  const patientName = useRef();
  const patientAge = useRef();
  const patientPhone = useRef();

  const resetInputValue = () => {
    patientName.current.value = "";
    patientAge.current.value = "";
    patientPhone.current.value = "";
  };

  const [state, dispatch] = useCustomContext();

  console.log(state?.patients);

  const handleSubmit = (e) => {
    e.preventDefault();
    const patientInfo = {
      name: patientName.current.value,
      age: patientAge.current.value,
      phone: patientPhone.current.value,
      id: state?.patients.length + 1,
    };

    dispatch({
      type: "ADD_PATIENT",
      payload: patientInfo,
    });
    resetInputValue();
  };

  return (
    <>
      <div>
        <h1>Patient Management: {state?.patients?.length}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="patient name"
            ref={patientName}
            required
          />
          <input
            type="number"
            placeholder="patient age"
            ref={patientAge}
            required
          />
          <input
            type="number"
            placeholder="patient phone"
            ref={patientPhone}
            required
          />
          <input
            type="submit"
            style={{
              background: "palevioletred",
              display: "block",
              marginBlock: "20px",
            }}
          />
        </form>
      </div>
    </>
  );
};

export default PatientManagement;
