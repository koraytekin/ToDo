import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import './TodoList.css'

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


function TodoList({ todos, completeTodo, removeTodo, updateTodo, selectedTodo, setSelectedTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''

  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })

  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }


  console.log(todos)
  return todos.map((todo, index) => (
    <div onClick={() => setSelectedTodo(todo)}
      className={todo.isComplete ?
        'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() =>
        completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>


    </div>
  ))


}

export default TodoList