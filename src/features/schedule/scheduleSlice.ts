import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ScheduleState {
  schedule: number[],
  period: number
}

// Define the initial state using that type
const initialState: ScheduleState = {
  schedule: [],
  period: 0
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
      if (action.payload > 0) state.schedule.push(action.payload)
    },
    deleteSchedule: (state, action: PayloadAction<number>) => {
      state.schedule.splice(action.payload, 1)
    },

    setPeriod: (state, action: PayloadAction<number>) => {
      state.period = action.payload
    },
    nextPeriod: (state) => {
      state.period += 1
    }
  }
})

export const { clearSchedule, addSchedule, deleteSchedule,
               setPeriod, nextPeriod } = scheduleSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default scheduleSlice.reducer