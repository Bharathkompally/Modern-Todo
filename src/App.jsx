import React, { useState,useEffect} from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

const allTasks=localStorage.getItem("tasks")

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(allTasks)||[]);
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  const handleDelete=(taskIndex)=>{
    setTasks([...tasks.slice(0,taskIndex),...tasks.slice(taskIndex+1)])
  }

  return (
    <>
    <div className='app'>
     
      <TaskForm setTasks={setTasks} />
      <main className='app-main'>
        <TaskColumn name='To-Do' tasks={tasks} status="To-Do"  handleDelete={handleDelete}/>
        <TaskColumn name='Doing' tasks={tasks} status="Doing" handleDelete={handleDelete}   />
        <TaskColumn name='Done'  tasks={tasks} status="Done" handleDelete={handleDelete} />
      </main>
     
    </div>
 
    </>
  );
};

export default App;
