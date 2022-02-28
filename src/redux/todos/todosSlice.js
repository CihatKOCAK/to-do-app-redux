import { createSlice } from "@reduxjs/toolkit";

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
    addTodo: (state, action) => {
      state.items.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed,
      });
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

export const { addTodo, toggleTodo, destroyTodo, setFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
