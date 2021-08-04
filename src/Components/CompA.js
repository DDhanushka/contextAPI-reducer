import React, { useContext } from "react";
import { useStore } from "../Context/StoreProvider";

const CompA = () => {
  const { globalState } = useStore();
  return (
    <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
      <h2>CompA</h2>
      <p> Counter1: {globalState.counterOne}</p>
      <p> Counter2: {globalState.counterTwo}</p>
    </div>
  );
};

export default CompA;
