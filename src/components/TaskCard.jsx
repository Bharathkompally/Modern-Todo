import React from 'react'
import { MdDelete } from "react-icons/md";
import './TaskCard.css'

const TaskCard= ({name,handleDelete,index}) => {
  return (
     
      <div className='task-card'>
      <p className='task-text'>{name}</p>
      <button className='task-delete' onClick={()=>handleDelete(index)}><MdDelete className='del-icon'/></button>
      </div>
      
     
  )
}

export default TaskCard
