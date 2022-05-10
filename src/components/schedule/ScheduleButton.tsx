import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setPeriod } from '../../features/schedule/scheduleSlice'
import { setIsWorking, setTime } from '../../features/pomodoro/pomodoroSlice'


const ScheduleButton = () => {
  const { schedule, period } = useAppSelector((state) => state.schedule)
  const { time } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (schedule[period]) {
      dispatch(setIsWorking(true))
      dispatch(setTime(schedule[0]))
      dispatch(setPeriod(0))
    }
  }


  return (
    <button onClick={handleClick}>
        Start
    </button>
  )
}

export default ScheduleButton