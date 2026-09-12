import { useState } from "react";
import TaskList from "./TaskList";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (taskName.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen bg-orange-100 p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
          My Task Tracker
        </h1>

        <div className="bg-white p-4 rounded shadow mb-4">
          <input
            type="text"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            placeholder="Enter a task"
            className="border p-2 w-full rounded mb-2"
          />

          <button
            onClick={addTask}
            className="bg-orange-500 text-white px-4 py-2 rounded w-full"
          >
            Add Task
          </button>
        </div>

        <TaskList
          tasks={tasks}
          onComplete={completeTask}
          onDelete={deleteTask}
        />

      </div>
    </div>
  );
}

export default App;