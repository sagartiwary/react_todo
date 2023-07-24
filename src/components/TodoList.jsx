import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsToggleOn, BsToggle2Off } from "react-icons/bs";
export const TodoList = ({ id, title, status, updateTodo, deleteTodo }) => {
  return (
    <div className="flex justify-between mx-4">
      <p className="text-xl text-gray-600 font-serif font-semibold">{title}</p>
      <p className="text-xl font-serif font-semibold">
        {" "}
        {status ? "Completed" : "Pending"}
      </p>

      <div>
        <button onClick={() => updateTodo(id)}>
          {status ? (
            <BsToggle2Off className="w-6 h-8" />
          ) : (
            <BsToggleOn className="w-6 h-8" />
          )}
        </button>{" "}
      </div>
      <div>
        <button onClick={() => deleteTodo(id)}>
          <AiTwotoneDelete className="w-6 h-8" />
        </button>
      </div>
    </div>
  );
};
