import React from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { deleteTodo } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ id, text, deleteTodo }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
    deleteTodo: () => dispatch(deleteTodo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
