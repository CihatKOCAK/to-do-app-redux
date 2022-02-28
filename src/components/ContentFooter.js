import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../redux/todos/todosSlice";

export default function ContentFooter() {

  const dispatch = useDispatch();

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const items = useSelector((state) => state.todos.items);
  const completedCount = items.filter((item) => item.completed).length;
  const activeCount = items.length - completedCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount + " "}</strong>
        item{activeCount > 1 && "s"} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(setFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(setFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeFilter === "competed" ? "selected" : ""}
            onClick={() => dispatch(setFilter("competed"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>Clear completed</button>
    </footer>
  );
}
