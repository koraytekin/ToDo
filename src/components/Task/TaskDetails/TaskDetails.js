import { Grid, TextField } from '@mui/material';
import react from 'react';
import './TaskDetails.css';



function TaskDetails({ todo, setTodo }) {
  return (
    <Grid container alignItems={'flex-start'} item sm={12} className="task-details" >
      <Grid item sm={12}>
        <TextField fullWidth value={todo.text} label="Title" size="small" margin="none" onChange={(e) => setTodo({ ...todo, text: e.target.value })} />
      </Grid>
      <Grid item sm={12}>
        <TextField fullWidth value={todo.description} label="Description" size="small" margin="dense" multiline rows={5} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      </Grid>
    </Grid>

  );
}

export default TaskDetails;