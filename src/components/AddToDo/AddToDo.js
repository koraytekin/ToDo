import { Button } from '@mui/material';
import react from 'react';
import './AddToDo.css';



function AddToDo({ setSelectedTodo }) {
  return (
    <div className="add-todo">
      <Button variant="contained"  onClick={() => setSelectedTodo({ text: '', description: '' })}>Add Task</Button>

 
    </div>
    
  );  
}

export default AddToDo;