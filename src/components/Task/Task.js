import react, { useEffect, useState } from 'react';
import './Task.css';
import Subtask from './Subtask/Subtask';
import TaskColors from './TaskColors/TaskColors';
import TaskDetails from './TaskDetails/TaskDetails';
import TaskStoryPoints from './TaskStoryPoints/TaskStoryPoints';
import { Button, Grid } from '@mui/material';



function Task({ todo, addTodo, updateTodo }) {

    const [currentTodo, setCurrentTodo] = useState(todo);

    useEffect(() => {
        setCurrentTodo(todo)
    }, [todo])

    const saveTask = () => {
        if (currentTodo.id) {
            updateTodo(currentTodo);
        }
        else {
            addTodo(currentTodo)
        }
    }

    return (
        <Grid container className="task" >
            <TaskDetails todo={currentTodo} setTodo={setCurrentTodo} />
            <TaskStoryPoints todo={currentTodo} setTodo={setCurrentTodo} />
            {currentTodo.id && <Subtask todo={currentTodo} setTodo={setCurrentTodo}  />}
            {/* <TaskColors /> */}
            <div className="update-todo">
                <Button onClick={() => currentTodo.id ? setCurrentTodo({ id: currentTodo.id }) : setCurrentTodo({})}>Clear</Button>
                <Button variant="contained" onClick={() => saveTask()}>{currentTodo.id ? 'Save' : 'Add'} </Button>
            </div>
        </Grid>

    );
}

export default Task;