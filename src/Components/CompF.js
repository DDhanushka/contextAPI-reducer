import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const CompF = () => {
  const myContext = useContext(MyContext);

  return (
    <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
      <h2>CompF</h2>
      <p>{myContext.name}</p>
    </div>
  );
};

export default CompF;
