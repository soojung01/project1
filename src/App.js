import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      done: true,
    },
  ]);

  return (
    <div className="container">
      <div className="header">
        <div style={{ marginLeft: "20px" }}> My Todo List</div>
        <div style={{ marginRight: "20px" }}>React</div>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
