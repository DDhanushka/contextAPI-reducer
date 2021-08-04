import React from "react";
import { useStore } from "../Context/StoreProvider";
import CompF from "./CompF";
import Counter from "./Counter";

const CompE = () => {
  const { globalState } = useStore();
  return (
    <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
      <h2>CompE </h2>
      <p>{`count1 : ${globalState.counterTwo}, count2: ${globalState.counterTwo}`}</p>
      <Counter />
      <CompF />
    </div>
  );
};

export default CompE;
