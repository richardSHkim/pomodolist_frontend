import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface PomodoroState {
  time: number,
  isWorking: boolean,
}

// Define the initial state using that type
const initialState: PomodoroState = {
  time: 0,
  isWorking: false,
}

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    },

    setIsWorking: (state, action: PayloadAction<boolean>) => {
      state.isWorking = action.payload
    }
  }
})

export const { setTime, setIsWorking } = pomodoroSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default pomodoroSlice.reducer