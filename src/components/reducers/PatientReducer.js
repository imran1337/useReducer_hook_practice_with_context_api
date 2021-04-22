export const patientState = {
  patients: [],
};
export const patientReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      return { ...state, patients: [...state.patients, action.payload] };
    case "REMOVE_PATIENT": {
      const filtered_patient = state.patients.filter(
        (patient) => patient.id !== action.id
      );
      return { ...state, patients: filtered_patient };
    }
    default:
      throw new Error();
  }
};
