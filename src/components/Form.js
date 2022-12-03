import React, { useState } from "react";
import { nanoid } from "nanoid";

function Form({ todos, setTodos }) {
  const initial = {
    id: 0,
    title: "",
    contents: "",
    done: false,
  };
  const [todo, setTodo] = useState(initial);

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
  );
}

export default Form;
