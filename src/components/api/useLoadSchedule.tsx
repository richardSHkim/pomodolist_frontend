import React from 'react'
import { setElapsedTime, setIsWorking, setTargetTime } from '../../features/pomodoro/pomodoroSlice'
import { addSchedule, clearSchedule, setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch } from '../../hooks'



const useLoadSchedule = () => {
  const dispatch = useAppDispatch()

  const loadFromDB = () => {
    fetch('/api/schedule', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
      if (data.length) {
        dispatch(clearSchedule())
        dispatch(setElapsedTime(0))
        dispatch(setIsWorking(false))
        for (const d of data[0].schedule) {
          dispatch(addSchedule(parseInt(d)*60))
        }
        dispatch(setPeriod(0))
        dispatch(setTargetTime(data[0].schedule[0]*60))
      }
      else console.log('no schedule in DB')
    })
    .catch(err => console.log(err))
  }

  return { loadFromDB }
}

export default useLoadSchedule