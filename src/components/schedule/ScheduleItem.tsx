import React from 'react'
import { setIsWorking, setTargetTime, setElapsedTime } from '../../features/pomodoro/pomodoroSlice'
import { setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

interface Props {
  item: number,
  index: number
}

const ScheduleItem = ({ item, index }: Props) => {
  const { schedule, period } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    if (period === index) {
      dispatch(setElapsedTime(0))
      dispatch(setTargetTime(0))
      dispatch(setPeriod(-1))
      dispatch(setIsWorking(false))
    }
    else {
      dispatch(setElapsedTime(0))
      dispatch(setTargetTime(schedule[index]))
      dispatch(setPeriod(index))
      dispatch(setIsWorking(false))
    }
  }

  if (index === period) {
    return (
      <span className='no-high' onClick={handleOnClick}>
        {item} *
      </span>
    )
  }
  else {
    return (
      <span className='no-high' onClick={handleOnClick}>
        {item}
      </span>
    )
  }

}

export default ScheduleItem