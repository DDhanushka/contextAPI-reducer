import React, { useReducer } from "react";

import { counterReducer, counterState } from "../Reducers/counterReducer";

const CounterOne = () => {
  const [count, dispatch] = useReducer(counterReducer, counterState);
  return (
    <div>
      <h3>Count1 : {count.counterOne}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>

      <hr />
      <h3>Count2 : {count.counterTwo}</h3>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset1" })}>Reset</button>
    </div>
  );
};

export default CounterOne;
