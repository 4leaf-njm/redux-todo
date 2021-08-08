import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/*
const ADD = "ADD";
const DELETE = "DELETE";

export const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};
*/

/*
const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");
*/

/*
const reducer = (state = [], action) => {
  switch (action.type) {
    // case ADD:
    case addTodo.type:
      return [
        {
          // text: action.text,
          text: action.payload,
          id: Date.now(),
        },
        ...state,
      ];
    // case DELETE:
    case deleteTodo.type:
      return state.filter(
        (todo) =>
          // todo.id !== action.id
          todo.id !== action.payload
      );
    default:
      return state;
  }
};
*/

// createReducer는 switch case를 안해도 되고, state를 mutate 할 수 있다.
// 초기 스테이트와 action에 따른 기능을 넣음.
/*
const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    // state를 mutate 했음.
    // state를 mutate 할 때는 return을 하면 안된다. 새로운 state만 return 해야 함.
    state.push({
      text: action.payload,
      id: Date.now(),
    });
  },
  [deleteTodo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload), // 새로운 state를 return 했음.
});
*/

const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});
// const store = createStore(reducer);

// configureStore를 사용하면 Redux DevTools를 사용할 수 있다.
const store = configureStore({
  // reducer
  reducer: todos.reducer,
});

/*
export const actionCreators = {
  addTodo,
  deleteTodo,
};
*/
export const { addTodo, deleteTodo } = todos.actions;

export default store;
