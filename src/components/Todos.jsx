import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-96 pt-4">
        <ul className="list-none">
          {todos.map((todo) => (
            <li key={todo.id} className="pt-4">
              <div className="flex justify-between items-center bg-gray-800 py-4 text-white px-4 rounded-md">
                {todo.text}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="-m-2.5 rounded-md p-2.5 bg-red-600"
                >
                  Cancella
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
