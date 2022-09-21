import React, { useState } from 'react'
import useTodoListAPI from '../api/useTodoListAPI'

const TodoListInput = () => {
  const { addTodoListAPI } = useTodoListAPI()

  const [todo, setTodo] = useState<string>('')

  const handleClick = () => {
    addTodoListAPI(todo)
    setTodo('')
  }

  return (
    <>
      <input type={'text'} style={{margin: '5px'}} value={todo} onChange={(e) => setTodo(e.target.value)} />  
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default TodoListInput