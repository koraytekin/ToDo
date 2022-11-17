import react, { useEffect, useState } from 'react';
import './Task.css';
import Subtask from './Subtask/Subtask';
import TaskColors from './TaskColors/TaskColors';
import TaskDetails from './TaskDetails/TaskDetails';
import TaskStoryPoints from './TaskStoryPoints/TaskStoryPoints';



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
        <div className="task">
            <TaskDetails todo={currentTodo} />
            <TaskStoryPoints />
            <Subtask />
            <TaskColors />
            <button onClick={() => addTodo(currentTodo)}>Save</button>
        </div>

    );
}

export default Task;