import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { task, setTask, addOrUpdateTask, editIndex } = useContext(TodoContext);

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addOrUpdateTask}>
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}

export default TodoForm;
