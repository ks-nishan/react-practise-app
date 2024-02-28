import React, { useReducer, useState } from "react";

import Todo from "./todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGEL_TODO: "toggel-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGEL_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);   

    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Dashboard() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handelSubmit(e) {
    e.preventDefault(); // insted of refresh this will prevent default
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default Dashboard;
