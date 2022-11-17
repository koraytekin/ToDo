import { Button, Grid, TextField } from '@mui/material';
import react from 'react';
import './TaskStoryPoints.css';

const storyPoints = [1, 2, 3, 5, 8, 13, 21]



function TaskStoryPoints({ todo, setTodo }) {
  console.log(todo.storyPoints)
  return (
    <Grid container alignItems={'flex-start'} item sm={12} className="task-storypoints" >
      <Grid item sm={12}>

        {storyPoints.map((storyPoint) => {
          return <Button className='task-storypoint-button' key={storyPoint} variant={todo.storyPoints === storyPoint ? 'contained' : "outlined"} onClick={() => setTodo({ ...todo, storyPoints: storyPoint })}>{storyPoint}</Button>
        })}

      </Grid>
    </Grid>

  );
}

export default TaskStoryPoints;