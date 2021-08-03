import React, { useReducer } from "react";

const initialState = { counterOne: 0, counterTwo: 100 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decrement":
      return { ...state, counterOne: state.counterOne - action.value };
    case "reset1":
      return initialState;
    case "increment2":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decrement2":
      return { ...state, counterTwo: state.counterTwo - action.value };
    case "reset2":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
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
