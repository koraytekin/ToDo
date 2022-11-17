import react from 'react';
import './LeftSection.css';
import AddToDo from '../AddToDo/AddToDo.js';
import TodoList from '../TodoList/TodoList.js';



function LeftSection({ todos, completeTodo, removeTodo, updateTodo, addToDo }) {
  return (
    <div className="left-section">
      <TodoList todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} />
      <AddToDo addToDo={addToDo} />
    </div>

  );
}

export default LeftSection;
