import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

// store 랑 App Component 연결하기 위해 Provider 를 사용
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
** Todo 기능 **
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// Action
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// ActionCreator
// action Object 를 생성해주고, dispatch 를 위해 사용 됨
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: Date.now(),
          text: action.text,
        },
        ...state,
      ];
    case DELETE_TODO:
      // splice는 mutation 을 해주기 때문에, filter 사용해서 새로운 Array를 return 하게 함
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
// state 를 mutation(수정) 하면 안되고, 새로운 Object로 생성해야 한다.
// .push X => []

// Store
const store = createStore(reducer);

store.subscribe(() => {
  paintTodo();
});

const paintTodo = () => {
  const todos = store.getState();

  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText = "삭제";
    btn.addEventListener("click", dispatchDeleteTodo);

    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

// Dispatch
const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  console.log(id);
  store.dispatch(deleteTodo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";

  dispatchAddTodo(todo);
};

form.addEventListener("submit", onSubmit);
*/

/*
** Counter 기능 **

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";

number.innerText = "0";


const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
// reducer 는 state 를 변경해주는 곳임
// reducer 의 파라미터는 state 와 action 을 받음
// reducer 가 return 을 하는 값으로 state 가 변경 됨
// action 은 reducer 와 커뮤니케이션 하는 용도
// action 은 항상 Object여야 하며, type 을 가져야 함

const countStore = createStore(countModifier);
// store 는 state 를 저장하는 곳임

const handlePlus = () => {
  countStore.dispatch({ type: PLUS });
};
// reducer 를 실행하는 방법은 dispatch 를 하고 실행할 action 을 전달한다.

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

const handleChange = () => {
  number.innerText = countStore.getState();
};
// store 에 저장된 state 값을 얻으려면 getState 함수를 이용하면 된다.

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

countStore.subscribe(handleChange);
// state 의 변화를 감지하려면 store의 subscribe 함수를 이용하면 된다.
*/
