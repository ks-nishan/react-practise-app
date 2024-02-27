import React, { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'DECREMENT'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function incrementCount(count) {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrementCount(count) {
    dispatch({ type: ACTIONS.DECREMENT });
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
