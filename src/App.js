import react, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSection from './components/LeftSection/LeftSection.js';
import RightSection from './components/RightSection/RightSection.js';



function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [{ ...todo, id: Math.random().toString(16).slice(2) }, ...todos]

    setTodos(newTodos);

  };

  const updateTodo = (updatedTodo) => {
    setTodos(prev => prev.map(item => (item.id === updatedTodo.id ? updatedTodo : item))
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
      <Header />
      <LeftSection todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        addTodo={addTodo}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo} />
      <RightSection todo={selectedTodo}
        updateTodo={updateTodo}
        addTodo={addTodo} />//
    </div>
  );
}


export default App;
