import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import './TodoList.css'

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Button, Card, CardContent, Grid } from '@mui/material';


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

  const checkIfSubTaskComplete = (todo) => {
    const allSubtasks = todo.subTasks || []
    return allSubtasks.every((subTask) => {
      return subTask.isCompleted
    })
  }



  return <div className='todo-list'>{
    todos.map((todo, index) => (

      <Card onClick={() => setSelectedTodo(todo)} className={`${todo.isCompleted && 'todo-row-complete'} todo-row`} elevation={todo.id === selectedTodo.id ? 6 : 1} key={index}>
        <CardContent>
          <Grid container alignContent={'center'} justifyContent='center'>
            <Grid item md={8}>
              <div key={todo.id} onClick={() =>
                completeTodo(todo.id)}>
                {todo.text}
              </div>
            </Grid>
            <Grid item md={4}>
              {!todo.isCompleted && <Button variant="outlined" disabled={!checkIfSubTaskComplete(todo)} onClick={() => updateTodo({ ...todo, isCompleted: true })}>Complete</Button>}
            </Grid>
          </Grid>
        </CardContent>
      </Card>




    ))}</div>
}





export default TodoList