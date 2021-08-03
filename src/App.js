import React, { useReducer, useContext } from "react";
import "./App.css";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import { StoreProvider } from "./Context/StoreProvider";
import { counterState, counterReducer } from "./Reducers/counterReducer";

const App = () => {
  return (
    <div>
      <StoreProvider reducer={counterReducer} initialState={counterState}>
        <CompA />
        <CompB />
        <CompC />
      </StoreProvider>
    </div>
  );
};

export default App;
