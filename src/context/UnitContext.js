//themecontext

import { createContext, useReducer } from "react";

const UnitContext = createContext();

//themecontextprovider component

let UnitReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_UNIT":
      return { ...state, unit: action.payload };
    default:
      return state;
  }
};

export default function UnitContextProvider({ children }) {
  let [state, dispatch] = useReducer(UnitReducer, {
    unit: "metric",
  });

  let changeUnit = () => {
    //action -> type + payload -> {type,payload}
    if (state.unit === "metric") {
      dispatch({ type: "CHANGE_UNIT", payload: "imperial" });
    } else {
      dispatch({ type: "CHANGE_UNIT", payload: "metric" });
    }
  };

  return (
    <UnitContext.Provider value={{ ...state, changeUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

export { UnitContext, UnitContextProvider };
