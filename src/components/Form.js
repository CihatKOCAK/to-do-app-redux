import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function Form() {
  const [text, setText] = useState("");
  console.log(Date.now());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addTodo({ id: Date.now(), text, completed: false }));
    dispatch(addTodo({ id: nanoid(), text, completed: false }));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
