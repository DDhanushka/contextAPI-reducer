import React, { useReducer, useContext } from "react";

import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import { MyContext } from "./Context/MyContext";
import { CounterContext } from "./Context/CounterContext";
import { counterState, counterReducer } from "./Reducers/counterReducer";

const App = () => {
  const [count, dispatch] = useReducer(counterReducer, counterState);
  return (
    <div>
      <MyContext.Provider
        value={{ name: "Dimuthu Dhanushka", id: 23, subs: 445 }}
      >
        <CounterContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          <h1>Count1 : {count.counterOne} </h1>
          <h1>Count2 : {count.counterTwo} </h1>
          <CompA />
          <CompB />
          <CompC />
        </CounterContext.Provider>
      </MyContext.Provider>
    </div>
  );
};

export default App;
