import "./App.css";
import AddTodo from "./components/Addtodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  return (
    <>
      <h1 className="text-4xl p-4">Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
