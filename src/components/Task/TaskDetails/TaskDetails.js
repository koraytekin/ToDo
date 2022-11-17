import react from 'react';
import './TaskDetails.css';



function TaskDetails({todo}) {
  return (
    <div className="task-details">
      <div className='task-title'>{todo.text}</div>
      <div className='task-description'>{todo.description}</div>
    </div>

  );
}

export default TaskDetails;