import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} />
        ))}
      </ul>
    </>
  );
};

// mapStateToProps에는 store에 state와 Home에 props를 파라미터로 받아온다.
const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
};

// connect는 mapStateToProps에 return 값을 Home에 props로 넣어준다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
