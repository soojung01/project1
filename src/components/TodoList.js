import React from "react";

function TodoList({ todos, setTodos }) {
  const cardDelete = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  const cardDone = (todoId) => {
    setTodos(
      todos.map((item) =>
        item.id === todoId ? { ...item, done: !item.done } : { ...item }
      )
    );
  };

  return (
    <div>
      <h2>Working..🔥</h2>
      <div className="flex">
        {todos.map((todo) => {
          if (!todo.done) {
            return (
              <div>
                <div className="todoBox">
                  <div className="todoTitle">{todo.title}</div>
                  <div className="todoContents">{todo.contents}</div>
                  <button
                    className="btn btn--del"
                    onClick={() => cardDelete(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="btn btn--done"
                    onClick={() => cardDone(todo.id)}
                  >
                    {todo.done ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            );
          } else return null;
        })}
      </div>
      <h2>done..🔥</h2>
      <div className="flex">
        {todos.map((todo) => {
          if (todo.done) {
            return (
              <div>
                <div className="todoBox">
                  <div className="todoTitle">{todo.title}</div>
                  <div className="todoContents">{todo.contents}</div>
                  <button
                    className="btn btn--del"
                    onClick={() => cardDelete(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="btn btn--done"
                    onClick={() => cardDone(todo.id)}
                  >
                    {todo.done ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
}

export default TodoList;
