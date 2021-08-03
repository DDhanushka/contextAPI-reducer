import React, { useState } from "react";
import CompC from "./Components/CompC";
import { MyContext } from "./Context/MyContext";
import { CounterContext } from "./Context/CounterContext";
import CounterOne from "./Components/CounterOne";

const App = () => {
  return (
    <div>
      <MyContext.Provider
        value={{ name: "Dimuthu Dhanushka", id: 23, subs: 445 }}
      >
        <CounterOne/>
        <CompC />
      </MyContext.Provider>
    </div>
  );
};

export default App;
