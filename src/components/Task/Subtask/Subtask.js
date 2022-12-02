import react, { useState } from 'react';
import './Subtask.css';
import Checkbox from './Checklist.js';
import { Button, Grid, TextField } from '@mui/material';






function Subtask({ todo, setTodo }) {
  const [newSubTaskTitle, setNewSubTaskTitle] = useState('')
// Getting the new title info and saving it as a state

  const createSubTask = () => {
    const allSubTasks = todo.subTasks || []
    setTodo({ ...todo, subTasks: [...allSubTasks, { title: newSubTaskTitle, isCompleted: false }] })
  }
// It is adding the current subtask to the subtasks list

  const toggleSubTask = (subTaskIndex) => {
    const newSubTasks = [...todo.subTasks]
    newSubTasks[subTaskIndex].isCompleted = !newSubTasks[subTaskIndex].isCompleted
    setTodo({ ...todo, subTasks: newSubTasks })
  }
// It is changing the completed status of the clicked subtask item. 


  return (
    <Grid container className="sub-task2" spacing={1}>
      <Grid item sm={8}>
        <TextField fullWidth value={newSubTaskTitle} label="Add SubTask" size="small" margin="none" onChange={(e) => setNewSubTaskTitle(e.target.value)} />
      </Grid>
      <Grid item sm={4}>
        <Button variant='contained' onClick={() => createSubTask()}>Add Subtask</Button>
      </Grid>
      <Checkbox subTasks={todo.subTasks || []} toggleSubTask={toggleSubTask} />
      {/* // Checkbox is to display all the current substasks with their completed status */}
 
    </Grid>

  )
};



export default Subtask;