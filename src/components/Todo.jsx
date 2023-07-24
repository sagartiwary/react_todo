import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    let newTodo = {
      id: Math.random(),
      title: text,
      status: false,
    };
    const newAddedTodo = [...todo, newTodo];
    // console.log(newAddedTodo)
    setTodo(newAddedTodo);
    setText("");
  };

  const updateTodo = (id) => {
    const updateAndAddedTodo = todo.map((ele) => {
      return id === ele.id ? { ...ele, status: !ele.status } : ele;
    });
    setTodo(updateAndAddedTodo);
    setText("");
  };

  const deleteTodo = (id) => {
    let myTodo = todo.filter((ele) => ele.id != id);
    setTodo(myTodo);
    setText("");
  };
  return (
    <>
      <div className="max-w-[500px] border-2 border-gray-200 mx-auto my-6 ">
        <h1 className="text-4xl text-center font-serif font-bold text-orange-400 transition-all">TODOS</h1>
        <hr className="mt-5 text-gray-300"/>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="ADD TODOS"
            onChange={(e) => setText(e.target.value)}
            className="border-gray-400-600 border-2 ml-[1rem] my-[1rem] p-3 w-[50%]"
          />
          <button
            className="border-gray-400 border-2 ml-[1rem] my-[1rem] p-3 w-[30%] bg-blue-800 rounded text-white sm:text-md text-xl font-bold mx-4"
            onClick={handleClick}
          >
            ADD
          </button>
        </div>
        {todo.map((ele) => {
          return (
            <TodoList
              key={ele.id}
              {...ele}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </>
  );
};
