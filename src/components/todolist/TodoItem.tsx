import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import { TodoType } from '../../features/todolist/todolistSlice';
import useTodoListAPI from '../api/useTodoListAPI';

export interface Props {
  todo: TodoType,
  index: number
}

export const TodoItem = ({ todo, index }: Props) => {
  const { updateTodoListAPI, deleteTodoAPI } = useTodoListAPI()

  const onDoneClick = () => {
    updateTodoListAPI(todo.id, todo.todo, !todo.done)
  }

  const onDeleteClick = () => {
    deleteTodoAPI(todo.id)
  }

  return (
    <>
      <div className='no-high'>
        <span style={{'margin': '10px'}}>
          {(todo.done) ? <del>{todo.todo}</del> : todo.todo}
        </span>
        <IconButton aria-label="delete" onClick={onDoneClick}>
          <DoneIcon/>
        </IconButton>
        <IconButton aria-label="delete" onClick={onDeleteClick}>
          <DeleteIcon/>
        </IconButton>
      </div>
    </>
  )
}