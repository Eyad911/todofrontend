import React, { useState, useEffect } from "react";
import axios from "axios";
import { deleteTask, getAllTasks,addTask } from "./component/todolist";

const BASE_URL = "http://localhost:4000";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const tasks = await axios.get(`${BASE_URL}/tasks`);

    setTasks(tasks.data);
  };

  return (
    <div className="App">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{tasks.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;