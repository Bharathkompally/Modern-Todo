import React, { useState } from 'react';
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [todo, setTodo] = useState({
    task: '',
    status: 'To-Do',
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
      }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.task.trim()) {
      alert("Task name cannot be empty.");
      return;
    }
    setTasks((prev) => [
      ...prev,
      todo,
    ]);
    setTodo({task: '',
      status: 'To-Do',})
  };

  return (
    <header className='app-header'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className='task-input'
          value={todo.task}
          onChange={handleChange}
          placeholder='Enter To-Do'
        />
        <div className='task-form-bottom'>
          <select
            name="status"
            className='task-status'
            value={todo.status}
            onChange={handleChange}
          >
            <option value="To-Do">To-Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit" className='task-submit'>+ Add Task</button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
