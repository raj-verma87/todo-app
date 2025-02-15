import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import PropTypes from "prop-types";

function TodoItem({ task, index }) {
  const { removeTask, editTask } = useContext(TodoContext);

  return (
    <li className={`task-item task-${index % 5}`}>
      {task}
      <div>
        <button onClick={() => editTask(index)}>✏️ Edit</button>
        <button onClick={() => removeTask(index)}>❌ Delete</button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
