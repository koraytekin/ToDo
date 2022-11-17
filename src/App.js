import react, { useState } from 'react';
import './App.css';
import LeftSection from './components/LeftSection/LeftSection.js';
import RightSection from './components/RightSection/RightSection.js';



function App() {
  const [todos, setTodos] = useState([{ id: '1', text: 'value1', description: 'Desc1' }, { id: '2', text: 'Title', description: 'Description' }, { id: '3', text: 'value3', description: 'Desc3' }]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos);

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );

  };
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-app2">
      {/* <TodoList  />
      <Checklist /> */}
      <LeftSection todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        addTodo={addTodo} />
      <RightSection todo={todos[1]} />//
    </div>
  );
}


export default App;