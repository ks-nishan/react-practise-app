import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // const [count, setCount] = useState(0);

  function incrementCount(count) {
    dispatch({ type: "increment" });
  }

  function decrementCount(count) {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Home;
