import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import { deleteTodoList } from '../../features/todolist/todolistSlice';
import { useAppDispatch } from '../../hooks';

interface Props {
  todo: string,
  index: number
}

const TodoItem = ({ todo, index }: Props) => {
  const dispatch = useAppDispatch()

  const [done, setDone] = useState(false)

  const onDeleteClick = () => {
    dispatch(deleteTodoList(index))
  }

  return (
    <>
      <div className='no-high'>
        <span style={{'margin': '10px'}}>
          {(done) ? <del>{todo}</del> : todo}
        </span>
        <IconButton aria-label="delete" onClick={() => setDone(!done)}>
          <DoneIcon/>
        </IconButton>
        <IconButton aria-label="delete" onClick={onDeleteClick}>
          <DeleteIcon/>
        </IconButton>
      </div>
    </>
  )
}

export default TodoItem