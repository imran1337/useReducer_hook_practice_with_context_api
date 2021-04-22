import "./App.css";
import ReducerCount from "./components/ReducerCount/ReducerCount";
import ReducerForm from "./components/ReducerForm/ReducerForm";
import PatientParentComp from "./components/PatientParentComp/PatientParentComp";

function App() {
  return (
    <div className="app">
      {/* <ReducerCount /> */}
      {/* <ReducerForm /> */}
      <div>
        <PatientParentComp />
      </div>
    </div>
  );
}

export default App;
