import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { addSchedule } from '../../features/schedule/scheduleSlice'


const ScheduleInput = () => {
  const dispatch = useAppDispatch()
  const [userTime, setUserTime] = useState<number>(0)

  return (
    <>
      <div>
        <input type={'number'} step={5} min={0} value={userTime} onChange={(e) => setUserTime(parseInt(e.target.value))}></input>
        
        <button onClick={() => setUserTime(0)}>
          reset
        </button>

        <button onClick={() => setUserTime(userTime + 10)}>
          +10
        </button>

        <button onClick={() => setUserTime(userTime + 50)}>
          +50
        </button>
      </div>

      <>
        <button onClick={() => {
          dispatch(addSchedule(userTime))
          setUserTime(0)
          }}>
          Set
        </button>
      </>
    </>
  )
}

export default ScheduleInput