function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 rounded shadow">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />

        <span
          className={`ml-2 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.name}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-orange-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;