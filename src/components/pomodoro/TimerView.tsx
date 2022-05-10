import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setIsWorking, setTime } from '../../features/pomodoro/pomodoroSlice'
import { nextPeriod } from '../../features/schedule/scheduleSlice'


const TimerView = () => {
  const { schedule, period } = useAppSelector((state) => state.schedule)
  const { time, isWorking } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dummy interval
    let interval = setInterval(()=>{}, 1000)

    // count down only when isWorking is true.
    if (isWorking) {
      interval = setInterval(() => {
        dispatch(setTime(time - 1))
      }, 1000)
    }

    // stop counting when time is 0.
    if (time === 0) {
      clearInterval(interval)

      if (isWorking) {
        // check if current period is final one.
        if (period < (schedule.length-1)){
          // go to next period.
          dispatch(setTime(schedule[period + 1]))
          dispatch(nextPeriod())
        }

        // wait for user interaction.
        dispatch(setIsWorking(false))
      }
    }

    return () => clearInterval(interval)
  }, [time, isWorking])

  return (
    <>
      {Math.floor(time/60)}min {time%60}sec
    </>
  )
}

export default TimerView