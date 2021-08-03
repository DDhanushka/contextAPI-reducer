import React, { useContext } from "react";
import CompD from "./CompD";

const CompB = () => {
  return (
    <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
      <h2>CompB</h2>

      <CompD/>

    </div>
  );
};

export default CompB;
