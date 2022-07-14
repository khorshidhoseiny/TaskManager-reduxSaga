import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  NOT_COMPLETED: "NOT_COMPLETED",
};

const initialState = {
  todos: [],
  searchTerm: "",
  filterBy: filters.ALL,
  edit: { id: null, title: "", desc: "" },
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        title: action.payload.title,
        desc: action.payload.desc,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    toggleTodo: (state, action) => {
      const seletedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      seletedTodo.completed = !seletedTodo.completed;
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    updateTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.title = action.payload.Text;
      selectedTodo.desc = action.payload.description;
      console.log(selectedTodo, "selectedTodo on TodoSlice");
    },

    filterBy(state, action) {
      state.filterBy = action.payload;
    },
  },
});
export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  setEdit,
  setSearchTerm,
  filterBy,
} = TodoSlice.actions;

export default TodoSlice.reducer;
