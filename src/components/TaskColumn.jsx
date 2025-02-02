import React from 'react'
import "./TaskColumn.css";
import TaskCard from './TaskCard';

const TaskColumn = ({name,tasks,status,handleDelete}) => {
  return (
    
    <section className='task-column'>
      <h2>{name}</h2>
      {
        tasks.map((tasks,index)=>tasks.status===status && <TaskCard key={index} name={tasks.task} handleDelete={handleDelete} index={index}/>
      )}
    </section>
      
  )
}

export default TaskColumn
