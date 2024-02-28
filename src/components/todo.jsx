import React from "react";
import {ACTIONS} from './dashboard';

function todo({ todo, dispatch}) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={() => dispatch({type: ACTIONS.TOGGEL_TODO, payload: {id: todo.id}})}>Toggel</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
    </div>
  );
}

export default todo;
