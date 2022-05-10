import React from 'react'
import { setIsWorking, setTime } from '../../features/pomodoro/pomodoroSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const TimerButton = () => {
  const { schedule, period } = useAppSelector((state) => state.schedule)
  const { time, isWorking } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  return (
    <button onClick={() => dispatch(setIsWorking(true))}>
      Start
    </button>
  )
}

export default TimerButton