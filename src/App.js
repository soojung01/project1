import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const initial = {
    id: 0,
    title: "",
    contents: "",
    done: false,
  };

  const [todo, setTodo] = useState(initial);
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

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.contents.trim() === "") return;
    setTodos([...todos, { ...todo, id: nanoid() }]);
    setTodo(initial);
  };

  return (
    <div className="container">
      <div className="header">
        <div style={{ marginLeft: "20px" }}> My Todo List</div>
        <div style={{ marginRight: "20px" }}>React</div>
      </div>
      <form className="todoForm" onSubmit={onSubmitHandler}>
        <div className="formGroup">
          <div className="inputName">제목</div>
          <input
            className="inputBox"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          />
          <div className="inputName">내용</div>
          <input
            className="inputBox"
            name="contents"
            value={todo.contents}
            onChange={onChangeHandler}
          />
        </div>
        <button className="myButton">추가하기</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
