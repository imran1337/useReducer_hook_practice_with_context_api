import React, { createContext, useReducer } from "react";
import PatientManagement from "../PatientManagment/PatientManagement";
import ShowPatients from "../reducers/ShowPatients";
import CustomContext from "../CustomContext/CustomContext";
import { patientReducer, patientState } from "../reducers/PatientReducer";

export const reducerContext = createContext();

const PatientParentComp = () => {
  const [state, dispatch] = useReducer(patientReducer, patientState);
  return (
    <CustomContext.Provider value={[state, dispatch]}>
      <PatientManagement />
      <ShowPatients />
    </CustomContext.Provider>
  );
};

export default PatientParentComp;
