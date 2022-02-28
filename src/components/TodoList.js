import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, destroyTodo } from "../redux/todos/todosSlice";


function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroyTodo({ id: id }));
    }
  };
  let filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((item) =>
      activeFilter === "active" ? !item.completed : item.completed
    );
  }

  return (
    <ul className="todo-list">
      {/* <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn JavaScript</label>
          <button className="destroy"></button>
        </div>
      </li> */}
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggleTodo({ id: item.id }))}
            />
            <label>{item.text}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
