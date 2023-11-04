import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-100 h-100 p-2 rounded-md flex-auto border-0 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mr-0.2"
      />
      <button
        type="submit"
        className="-m-2.5 rounded-md p-2 bg-purple-600 text-white ml-0.2"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
