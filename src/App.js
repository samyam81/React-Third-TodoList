import React, { useState, useEffect } from "react";
import "./App.css"; // Optional: Make sure to create this file for styling

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-Header">
        <h1>My Task Manager</h1>
        <p>Welcome to Your private task Manager!</p>

        <div className="Input-task">
          <input
            placeholder="Your task for today"
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button> {}
        </div>
      </header>
      <main className="App-main">
        {" "}
        {}
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(index)}
              />
              {task.text} {}
              <button onClick={() => deleteTask(index)}>Delete</button> {}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
