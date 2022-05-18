import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface TodoListState {
  todoList: string[],
}

// Define the initial state using that type
const initialState: TodoListState = {
  todoList: [],
}

export const todolistSlice = createSlice({
  name: 'schedule',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearTodoList: (state) => {
      state.todoList = []
    },
    addTodoList: (state, action: PayloadAction<string>) => {
      if (action.payload) state.todoList.push(action.payload)
    },
    deleteTodoList: (state, action: PayloadAction<number>) => {
      state.todoList.splice(action.payload, 1)
    },
  }
})

export const { clearTodoList, addTodoList, deleteTodoList } = todolistSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default todolistSlice.reducer