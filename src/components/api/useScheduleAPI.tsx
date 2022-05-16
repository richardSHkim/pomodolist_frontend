import React from 'react'
import { setElapsedTime, setIsWorking, setTargetTime } from '../../features/pomodoro/pomodoroSlice'
import { addSchedule, clearSchedule, setId, setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const useScheduleAPI = () => {
  const { schedule, id } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()

  const loadFromDB = () => {
    fetch('/api/schedule', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
      if (data.length) {
        dispatch(setId(data[0]._id))
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

  const deleteFromDB = () => {
    if (id) {
      fetch(`/api/schedule/${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
      })
      .catch(err => console.log(err))
    }
    else console.log('no id')
  }

  const saveToDB = () => {
    if (schedule.length) {
      const scheduleToSave = Array.from(schedule, x => x/60)
      fetch('/api/schedule', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ schedule: scheduleToSave })
      })
    }

    else console.log('no schedule exists')

  }

  return { loadFromDB, deleteFromDB, saveToDB }
}

export default useScheduleAPI