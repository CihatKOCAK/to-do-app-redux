import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/services";
import Loading from "./Loading";
import Error from "./Error";

export default function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.addNewTodo.isLoading);
  const error = useSelector((state) => state.todos.addNewTodo.error);

  const handleSubmit = async (e) => {
    if (!text) return;
    e.preventDefault();
    //dispatch(addTodo({ id: Date.now(), text, completed: false }));
    await dispatch(addTodoAsync({ text }));
    setText("");
  };

  
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}
