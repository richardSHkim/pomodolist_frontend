import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoType {
  id: number,
  todo: string,
  done: boolean
}

// Define a type for the slice state
interface TodoListState {
  todoList: TodoType[],
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
    setTodoList: (state, action: PayloadAction<TodoType[]>) => {
      state.todoList = action.payload
    },
  }
})

export const { setTodoList } = todolistSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default todolistSlice.reducer