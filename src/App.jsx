import TodoProvider from "./TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css"; 

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>To-Do List</h1>
        <TodoForm />  {/* Ensure this is included */}
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
