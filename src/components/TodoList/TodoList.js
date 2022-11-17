import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import './TodoList.css'



function TodoList({todos, completeTodo, removeTodo, updateTodo }) {
    

  return (
    <div className='todo-list'>
        <h1>What's the plan for today?</h1>
        {/* <TodoForm onSubmit={()=>{}} /> */}
        <Todo todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo}   
        updateTodo={updateTodo} 
        />
        
    </div>
  );
}

export default TodoList