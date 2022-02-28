import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: "1", text: "Learn React", completed: false },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Have a life!", completed: true },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: {
      reducer:(state, action) => {
        state.items.push(action.payload);
      },
      // The 2nd argument is called "prepare"
      prepare:({text})=> {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            text: text,
          },
        };
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    destroyTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload.id);
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active" ? !todo.completed : todo.completed
  );
};

export const selectActiveFilter = (state) => state.todos.activeFilter;

export const { addTodo, toggleTodo, destroyTodo, setFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
