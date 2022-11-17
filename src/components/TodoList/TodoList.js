import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import './TodoList.css'

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Card, CardContent } from '@mui/material';


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
  return <div className='todo-list'>{
    todos.map((todo, index) => (

      <Card onClick={() => setSelectedTodo(todo)} className="todo-row" elevation={todo.id === selectedTodo.id ? 6 : 1} key={index}>
        <CardContent>
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
        </CardContent>
      </Card>




    ))}</div>
}





export default TodoList