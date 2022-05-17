import React from 'react'
import { setElapsedTime, setIsWorking, setTargetTime } from '../../features/pomodoro/pomodoroSlice'
import { addSchedule, clearSchedule, setId, setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const useScheduleAPI = () => {
  const { schedule, id } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()

  const loadSchedule = async () => {
    const res = await fetch('/api/schedule', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })

    if (res.ok) {
      const data = await res.json()
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
    }
    else console.log('can not load from server')
  }

  const saveSchedule = async () => {
    const scheduleToSave = Array.from(schedule, x => x/60)

    const res = await fetch('/api/schedule', {
      method: 'PUSH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ schedule: scheduleToSave })
    })

    if (res.ok) console.log('schedule saved')
    else console.log('can not save to server')
  }

  const updateSchedule = async (id: null | string) => {
    if (id) {
      const scheduleToSave = Array.from(schedule, x => x/60)

      const res = await fetch(`/api/schedule/${id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ schedule: scheduleToSave })
      })
  
      if (res.ok) console.log('schedule updated')
      else console.log('can not save to server')
    }
    else console.log('id is not available')
  }

  const deleteSchedule = async (id: null | string) => {
    if (id) {
      const res = await fetch(`/api/schedule/${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
      })
      
      if (res.ok) console.log('schedule deleted')
      else console.log('can not delete from server')
    }
    else console.log('id is not available')
  }

  return { loadSchedule, saveSchedule, updateSchedule, deleteSchedule }
}

export default useScheduleAPI