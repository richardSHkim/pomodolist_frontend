import { setTodoList } from '../../features/todolist/todolistSlice'
import { useAppDispatch } from '../../hooks'

const useTodoListAPI = () => {
  const dispatch = useAppDispatch()

  const loadTodoListAPI = async () => {
    const res = await fetch('/api/todolist', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })

    if (res.ok) {
      const data = await res.json()
      dispatch(setTodoList(data.todolist))

      console.log('todolist loaded')
    }
    else console.log('load todolist failed')
  }

  const addTodoListAPI = async (todo: string, done: boolean=false) => {
    const res = await fetch('/api/todolist', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "todo": todo, "done": done})
    })

    if (res.ok) {
      const data = await res.json()
      dispatch(setTodoList(data.todolist))

      console.log('todo added')
    }
    else console.log('add todo failed')
  }

  const updateTodoListAPI = async (id: number, todo: string, done: boolean=false) => {
    const res = await fetch('/api/todolist', {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "id": id, "todo": todo, "done": done })
    })

    if (res.ok) {
      const data = await res.json()
      dispatch(setTodoList(data.todolist))
      
      console.log('todo updated')
    }
    else console.log('update todo failed')
  }

  const deleteTodoAPI = async (id: number) => {
    const res = await fetch('/api/todolist', {
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "id": id })
    })

    if (res.ok) {
      const data = await res.json()
      dispatch(setTodoList(data.todolist))
      
      console.log('todo deleted')
    }
    else console.log('delete todo failed')
  }

  return { loadTodoListAPI, addTodoListAPI, updateTodoListAPI, deleteTodoAPI }
}

export default useTodoListAPI