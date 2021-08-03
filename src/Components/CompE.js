import React, { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";
import CompF from "./CompF";
import Counter from "./Counter";

const CompE = () => {
  const context = useContext(CounterContext);
  return (
    <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
      <h2>CompE </h2>
      <p>{`count1 : ${context.countState.counterOne}, count2: ${context.countState.counterTwo}`}</p>
      <Counter/>
      <CompF />
    </div>
  );
};

export default CompE;
