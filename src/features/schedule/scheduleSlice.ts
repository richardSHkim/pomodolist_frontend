import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ScheduleState {
  schedule: number[]
}

// Define the initial state using that type
const initialState: ScheduleState = {
  schedule: [],
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearSchedule: (state) => {
      state.schedule = []
    },
    addSchedule: (state, action: PayloadAction<number>) => {
      state.schedule.push(action.payload)
    },
    deleteSchedule: (state, action: PayloadAction<number>) => {
      state.schedule.splice(action.payload, 1)
    }
  }
})

// export const {  } = scheduleSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default scheduleSlice.reducer