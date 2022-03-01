import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("http://localhost:7000/todos");
    return await res.json();
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: "all",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      // The 2nd argument is called "prepare"
      prepare: ({ text }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            text: text,
          },
        };
      },
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
  // Thunks
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
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
