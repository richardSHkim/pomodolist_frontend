import React, { useState } from 'react'
import { addTodoList } from '../../features/todolist/todolistSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const TodoListInput = () => {
  const { todoList } = useAppSelector((state) => state.todolist)
  const dispatch = useAppDispatch()

  const [todo, setTodo] = useState<string>('')

  const handleClick = () => {
    dispatch(addTodoList(todo))
    setTodo('')
  }

  return (
    <>
      <input type={'text'} style={{margin: '5px'}}
        value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button onClick={handleClick}>Set</button>
    </>
  )
}

export default TodoListInput