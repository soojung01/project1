import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
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

  function nameReceive(e) {
    setTitle(e.target.value);
  }

  function contentsReceive(e) {
    setContents(e.target.value);
  }

  function addCard(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: nanoid(), title: title, contents: contents, done: false },
    ]);
    setTitle("");
    setContents("");
  }

  function cardDelete(todoId) {
    setTodos(todos.filter((item) => item.id !== todoId));
  }

  const cardDone = (todoId) => {
    setTodos(
      todos.map((prev) =>
        todoId === prev.id ? { ...prev, done: !prev.done } : { ...prev }
      )
    );
  };

  return (
    <div className="container">
      <div className="header">
        <div style={{ marginLeft: "10px" }}> My Todo List</div>
        <div style={{ marginRight: "10px" }}>React</div>
      </div>
      <form className="todoForm" onSubmit={addCard}>
        <div className="formGroup">
          <div className="inputName">제목</div>
          <input
            className="inputBox"
            name="title"
            value={title}
            onChange={nameReceive}
          />
          <div className="inputName">내용</div>
          <input
            className="inputBox"
            name="contents"
            value={contents}
            onChange={contentsReceive}
          />
        </div>
        <button className="myButton">추가하기</button>
      </form>
      <h2>Working..🔥</h2>
      <div className="flex">
        {todos.map((todo) => {
          if (
            todo.done === false &&
            todo.title !== "" &&
            todo.contents !== ""
          ) {
            return (
              <div key={todo.id}>
                <div className="todoBox">
                  <div className="todoTitle">{todo.title}</div>
                  <div className="todoContents">{todo.contents}</div>
                  <button
                    className="btn btn--del"
                    onClick={() => cardDelete(todo.id)}
                  >
                    삭제하기
                  </button>
                  {todo.done ? (
                    <button
                      className="btn btn--done"
                      onClick={() => cardDone(todo.id)}
                    >
                      취소
                    </button>
                  ) : (
                    <button
                      className="btn btn--done"
                      onClick={() => cardDone(todo.id)}
                    >
                      완료
                    </button>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      <h2>done..🔥</h2>

      <div className="flex">
        {todos.map((todo) => {
          if (todo.done === true && todo.title !== "" && todo.contents !== "") {
            return (
              <div key={todo.id}>
                <div className="todoBox">
                  <div className="todoTitle">{todo.title}</div>
                  <div className="todoContents">{todo.contents}</div>
                  <button
                    className="btn btn--del"
                    onClick={() => cardDelete(todo.id)}
                  >
                    삭제하기
                  </button>
                  {todo.done ? (
                    <button
                      className="btn btn--done"
                      onClick={() => cardDone(todo.id)}
                    >
                      취소
                    </button>
                  ) : (
                    <button
                      className="btn btn--done"
                      onClick={() => cardDone(todo.id)}
                    >
                      완료
                    </button>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
