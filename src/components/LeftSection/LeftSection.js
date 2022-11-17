import react from 'react';
import './LeftSection.css';
import AddToDo from '../AddToDo/AddToDo.js';
import TodoList from '../TodoList/TodoList.js';



function LeftSection({ todos, completeTodo, removeTodo, updateTodo, addToDo, selectedTodo, setSelectedTodo }) {
  return (
    <div className="left-section">
      <TodoList todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} 
        selectedTodo={selectedTodo} 
        setSelectedTodo={setSelectedTodo}  />
      <AddToDo 
      setSelectedTodo={setSelectedTodo} />
    </div>

  );
}

export default LeftSection;
