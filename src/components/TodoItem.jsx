import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import PropTypes from "prop-types";

function TodoItem({ task, index }) {
  const { removeTask, editTask, toggleTaskCompletion } = useContext(TodoContext);

  return (
    <li className={`task-item task-${index % 5} ${task.completed ? "completed" : ""}`}>
      {/* Left-aligned Checkbox & Task Text */}
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        <span>{task.text}</span>
      </div>

      {/* Right-aligned Edit & Delete Buttons */}
      <div className="task-buttons">
        <button onClick={() => editTask(index)}>✏️ Edit</button>
        <button onClick={() => removeTask(index)}>❌ Delete</button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
