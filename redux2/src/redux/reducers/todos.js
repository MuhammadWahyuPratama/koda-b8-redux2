import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.todos.find((item) => item.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTask, editTask, removeTask, toggleTask } = todosSlice.actions;

export default todosSlice.reducer;
