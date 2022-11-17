import react from 'react';
import './AddToDo.css';



function AddToDo({ setSelectedTodo}) {
  return (
    <div className="add-todo">
      <button onClick={() => setSelectedTodo({ text: '', description: ''})}>Add Task</button>

    </div>
    
  );  
}

export default AddToDo;