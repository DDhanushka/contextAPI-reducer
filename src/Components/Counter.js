import React, { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const Counter = () => {
  const { countState, countDispatch } = useContext(CounterContext);
  return (
    <div>
      <h3>Count1 : {countState.counterOne}</h3>
      <button onClick={() => countDispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => countDispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => countDispatch({ type: "reset2" })}>Reset</button>

      <hr />
      <h3>Count2 : {countState.counterTwo}</h3>
      <button onClick={() => countDispatch({ type: "increment2", value: 1 })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "decrement2", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "increment2", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => countDispatch({ type: "decrement2", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => countDispatch({ type: "reset1" })}>Reset</button>
    </div>
  );
};

export default Counter;
