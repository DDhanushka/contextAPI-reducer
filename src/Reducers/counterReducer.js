export const counterState = { counterOne: 0, counterTwo: 100 };
export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decrement":
      return { ...state, counterOne: state.counterOne - action.value };
    case "reset1":
      return {...state, counterOne: counterState.counterTwo};
    case "increment2":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decrement2":
      return { ...state, counterTwo: state.counterTwo - action.value };
    case "reset2":
      return {...state, counterTwo: counterState.counterTwo};
    default:
      return state;
  }
};
