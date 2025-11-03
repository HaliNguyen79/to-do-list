import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 'task1', title: 'Learn JS', status: 1 },
    { id: 'task2', title: 'Code a To-do Lst', status: 0 },
    { id: 'task3', title: 'Do Something', status: 0 },
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
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <li key={task.id} className={task.status ? 'done' : ''}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input type="checkbox" className="btn-action" />
                <button className="btn-action btn-action-delete">x</button>
              </div>
            </li>
          ))}
      </ul>

      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input onClick={()=>setShowIncomplete(!showIncomplete)} type="checkbox" id="filter" checked={showIncomplete} />
      </div>

      <form action="#" className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" id="newitem" value={newTask} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
