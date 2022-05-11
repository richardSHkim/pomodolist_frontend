import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setPeriod } from '../../features/schedule/scheduleSlice'
import { setIsWorking, setTargetTime, setTime } from '../../features/pomodoro/pomodoroSlice'


const ScheduleButton = () => {
  const { schedule, period } = useAppSelector((state) => state.schedule)
  const { time } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (schedule[period]) {
      dispatch(setIsWorking(true))
      dispatch(setTargetTime(schedule[0]))
      dispatch(setTime(0))
    }
  }


  return (
    <button onClick={handleClick}>
        Start Schedule
    </button>
  )
}

export default ScheduleButton