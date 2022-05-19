import React from 'react'
import { useAppSelector } from '../../hooks'
import TodoItem from './TodoItem'

const TodoListView = () => {
  const { todoList } = useAppSelector((state) => state.todolist)

  const todoListView: JSX.Element[] = todoList.map((todo, index) => {
    return (
      <div key={index} style={{padding: "5px"}}>
        <TodoItem todo={todo} index={index}/>
      </div>
    )
  })

  return (
    <>
      {todoListView}
    </>
  )
}

export default TodoListView