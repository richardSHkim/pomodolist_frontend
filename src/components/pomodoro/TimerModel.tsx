import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setIsWorking, setTargetTime, setElapsedTime } from '../../features/pomodoro/pomodoroSlice'
import { setPeriod } from '../../features/schedule/scheduleSlice'


const TimerModel = () => {
  const { schedule, period, isRepeat } = useAppSelector((state) => state.schedule)
  const { startTime, elapsedTime, targetTime, isWorking, useAlarm } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  const [alarm, setAlarm] = useState<HTMLAudioElement | null>()

  // set alarm
  useEffect(() => {
    setAlarm(new Audio('/sources/alarm.mp3'))
  }, [])

  useEffect(() => {
    // dummy interval
    let interval = setInterval(()=>{}, 1000)

    // count down only when isWorking is true.
    if (isWorking) {
      interval = setInterval(() => {
        dispatch(setElapsedTime(Math.floor((Date.now() - startTime)/1000)))
      }, 1000)
    }

    // stop counting when time reaches targetTime.
    if (elapsedTime >= targetTime) {
      clearInterval(interval)

      if (isWorking) {
        if (alarm && useAlarm) alarm.play()

        // check if current period is final one.
        if ((period < (schedule.length-1)) && (period > -1)){
          // go to next period.
          dispatch(setTargetTime(schedule[period + 1]))
          dispatch(setElapsedTime(0))
          dispatch(setPeriod(period + 1))
        }
        else {
          // check if isRepeat is true.
          if (isRepeat) {
            // go to the first period
            dispatch(setTargetTime(schedule[0]))
            dispatch(setElapsedTime(0))
            dispatch(setPeriod(0))
          }
          else {
            // end of schedule
            dispatch(setPeriod(-1))
          }

        }

        // wait for user interaction.
        dispatch(setIsWorking(false))
      }
    }

    return () => clearInterval(interval)
  }, [elapsedTime, isWorking])

  // handle the first schedule
  useEffect(() => {
    if (schedule.length === 1) {
      dispatch(setTargetTime(schedule[0]))
      dispatch(setPeriod(0))
    }
  }, [schedule])

  return (
    <div className='no-high'>
      {Math.floor(elapsedTime/60)}min {elapsedTime%60}sec
    </div>
  )
}

export default TimerModel