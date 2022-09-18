import { createContext, useReducer } from "react";

export const themeContext = createContext(); //Context create name

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { darkMode: !state.darkMode }; // {new_variable: !состояние.старое.значение}
      default:
        return state;   //можно тоже state.darkmode написать, тоже самое
  }
};


//Global Content create ex: ThemeProvider
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
  return (
    <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
  );
};
