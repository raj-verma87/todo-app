import { useState } from "react";
import { TodoContext } from "./TodoContext";
import PropTypes from "prop-types";

function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }

    setTask(""); // Reset input field
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Reset edit mode if deleting the task being edited
    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]); // Set input field value
    setEditIndex(index); // Store index to update
  };

  return (
    <TodoContext.Provider value={{ tasks, task, setTask, addOrUpdateTask, removeTask, editTask, editIndex }}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
