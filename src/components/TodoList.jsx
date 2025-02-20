import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { tasks } = useContext(TodoContext);

  if (tasks.length === 0) {
    return <p>No tasks added yet.</p>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
