import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ScheduleState {
  schedule: number[],
  period: number,
  isRepeat: boolean,
  id: null | string,
}

// Define the initial state using that type
const initialState: ScheduleState = {
  schedule: [],
  period: -1,
  isRepeat: true,
  id: '6283299b84274d7df57c6902'
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<number[]>) => {
      state.schedule = action.payload
    },
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

    setIsRepeat: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },

    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    }
  }
})

export const { setSchedule, clearSchedule, addSchedule, deleteSchedule,
               setPeriod,
               setIsRepeat,
               setId } = scheduleSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default scheduleSlice.reducer