import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: "task1", title: 'Learn JS', status: 0 },
    { id: "task2", title: 'Code a To-do Lst', status: 0 },
    { id: "task3", title: '', status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState('');
  return (
    <div className="container">
      <h1 className="title">
        To-do List
        <span>Get things done, one item at a time.</span>
      </h1>

      <ul className="task-list">
        {tasks.map( (task) => (
          <li key={task.id} className={task.status ? "done" : ""}>
          <span className="label">{task.title}</span>
          <div className="actions">
            <input type="checkbox" className="btn-action" />
            <button className="btn-action btn-action-delete">x</button>
          </div>
        </li>
        ))}
        

        <li>
          <span className="label">Code a Todo List</span>
          <div className="actions">
            <input type="checkbox" className="btn-action" />
            <button className="btn-action btn-action-delete">x</button>
          </div>
        </li>
      </ul>

      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input type="checkbox" id="filter" />
      </div>

      <form action="#" className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" id="newitem" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
