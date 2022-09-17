import { setTargetTime } from '../../features/pomodoro/pomodoroSlice'
import { setSchedule, setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch } from '../../hooks'

const useScheduleAPI = () => {
  const dispatch = useAppDispatch()

  const loadScheduleAPI = async () => {
    const res = await fetch('/api/schedule', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })

    if (res.ok) {
      const data = await res.json()

      if (data.schedule.length) {
        const schedule_data = data.schedule.map((x: number) => x*60)
        dispatch(setSchedule(schedule_data))
        dispatch(setPeriod(0))
        dispatch(setTargetTime(schedule_data[0]))
      }
    }
    else console.log('load schedule failed')
  }

  const addScheduleAPI = async (time: number) => {
    const res = await fetch('/api/schedule', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "time": time })
    })

    if (res.ok) console.log('schedule saved')
    else console.log('add schedule failed')
  }

  const clearScheduleAPI = async () => {
    const res = await fetch('/api/schedule', {
      method: 'DELETE',
    })

    if (res.ok) console.log('schedule cleared')
    else console.log('clear schedule failed')
  }

  return { loadScheduleAPI, addScheduleAPI, clearScheduleAPI }
}

export default useScheduleAPI