import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { addSchedule } from '../../features/schedule/scheduleSlice'


const ScheduleInput = () => {
  const dispatch = useAppDispatch()
  const [userTime, setUserTime] = useState<number>(0)

  return (
    <>
      <input type={'number'} step={5} min={0} value={userTime} onChange={(e) => setUserTime(parseInt(e.target.value))}></input>
      <button onClick={() => {
        dispatch(addSchedule(userTime))
        setUserTime(0)
        }}>Set</button>
    </>
  )
}

export default ScheduleInput