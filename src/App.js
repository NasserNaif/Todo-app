import React, { useState, useEffect } from "react";

import "./App.css";
import NoElement from "./componants/NoElement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTask] = useState([]);

  function saveTask() {
    if (!newTask) {
      toast("Please enter a task");
      return;
    }
    const addItem = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTask((oldList) => [...oldList, addItem]);
    setNewTask("");
  }

  function delTask(id) {
    const newArr = tasks.filter((item) => {
      if (item.id !== id) return item;
    });

    setTask(newArr);
  }

  const items = tasks.map((item) => {
    return (
      <div className="taskCard">
        <h3 key={item.id}>{item.value}</h3>
        <button className="delBTN" onClick={(e) => delTask(item.id)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="App">
      <ToastContainer />
      <h1 className="title">Todo App</h1>
      <div className="input">
        <input
          type={"text"}
          placeholder={"enter a Task"}
          id="textInput"
          value={newTask}
          name="value"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button id="BTN" onClick={saveTask}>
          Save
        </button>
      </div>
      <div className="container">
        {tasks == 0 ? (<NoElement/>) : items}
      </div>
    </div>
  );
}

export default App;
