import react from 'react';
import Task from '../Task/Task';
import './RightSection.css';



function RightSection({todo, addTodo, updateTodo}) {
  console.log(todo)
  return (
    <div className="right-section">
      <Task todo={todo} 
      updateTodo={updateTodo}
      addTodo={addTodo} />
    </div>
  );
}

export default RightSection;
