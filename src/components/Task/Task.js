import react from 'react';
import './Task.css';
import Subtask from './Subtask/Subtask';
import TaskColors from './TaskColors/TaskColors';
import TaskDetails from './TaskDetails/TaskDetails';
import TaskStoryPoints from './TaskStoryPoints/TaskStoryPoints';



function Task({todo}) {
    return (
        <div className="task">
            <TaskDetails todo={todo} />
            <TaskStoryPoints />
            <Subtask />
            <TaskColors />

        </div>

    );
}

export default Task;