import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { addSchedule } from '../../features/schedule/scheduleSlice'


const ScheduleInput = () => {
  const dispatch = useAppDispatch()
  const [userTime, setUserTime] = useState<number>(0)

  const handleOnClick = (time: number) => {
    dispatch(addSchedule(time))
    setUserTime(0)
  }

  return (
    <>
      <div style={{margin: '5px'}}>
        <input type={'number'} step={5} min={0} value={userTime} onChange={(e) => setUserTime(parseInt(e.target.value))}></input>
        
        <button onClick={() => setUserTime(0)}>
          reset
        </button>

        <button onClick={() => handleOnClick(userTime)}>
          Set
        </button>
      </div>

      <div>
        <button style={{margin: '10px'}} onClick={() => handleOnClick(10)}>
            +10
        </button>

        <button onClick={() => handleOnClick(50)}>
            +50
        </button>
      </div>
    </>
  )
}

export default ScheduleInput