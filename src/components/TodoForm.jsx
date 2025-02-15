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
        style={{
          width: "300px",  // Increase width of input
          padding: "10px", // Add padding for better spacing
          fontSize: "16px", // Increase font size inside input
          marginBottom: "20px", // Adds space between input and button
          marginRight: "10px", // Adds horizontal gap between input and button
        }}
      />
      <button onClick={addOrUpdateTask}
      style={{
        marginTop: "10px", // Adds space between input and button
        padding: "10px 20px", // Adds padding to button
        fontSize: "16px", // Increase font size of button
      }}
      >
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}

export default TodoForm;
