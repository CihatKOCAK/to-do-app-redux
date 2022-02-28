import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";


export default function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if(!text) return;
    e.preventDefault();
    //dispatch(addTodo({ id: Date.now(), text, completed: false }));
    dispatch(addTodo({ text }));
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