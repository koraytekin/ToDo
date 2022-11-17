import react from 'react';
import Task from '../Task/Task';
import './RightSection.css';



function RightSection({todo}) {
  console.log(todo)
  return (
    <div className="right-section">
      <Task todo={todo} />
    </div>
  );
}

export default RightSection;
