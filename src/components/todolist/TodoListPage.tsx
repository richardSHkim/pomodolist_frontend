import React from 'react'
import TodoListInput from './TodoListInput'
import TodoListView from './TodoListView'

const TodoListPage = () => {
  return (
    <>
      <div style={{margin: '10px'}}>
        <TodoListInput/>
      </div>

      <div style={{margin: '10px'}}>
        <TodoListView/>
      </div>
    </>

  )
}

export default TodoListPage