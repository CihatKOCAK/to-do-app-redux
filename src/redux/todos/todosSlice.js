import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: "1", text: "Learn React", completed: false },
      { id: "2", text: "Learn Redux", completed: false },
      { id: "3", text: "Have a life!", completed: true },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed,
      });
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
