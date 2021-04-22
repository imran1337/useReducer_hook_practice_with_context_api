import React from "react";

const CustomContext = React.createContext();

export const useCustomContext = () => {
  return React.useContext(CustomContext);
};

export default CustomContext;