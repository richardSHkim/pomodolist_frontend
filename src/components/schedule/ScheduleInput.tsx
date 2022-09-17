import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { addSchedule, clearSchedule, setPeriod } from '../../features/schedule/scheduleSlice'
import useScheduleAPI from '../api/useScheduleAPI'
import { setElapsedTime, setIsWorking, setTargetTime } from '../../features/pomodoro/pomodoroSlice'


const ScheduleInput = () => {
  const dispatch = useAppDispatch()
  const { addScheduleAPI, clearScheduleAPI } = useScheduleAPI()

  const [userTime, setUserTime] = useState<number>(0)

  const handleOnClick = (time: number) => {
    addScheduleAPI(time)
    dispatch(addSchedule(time*60))
    setUserTime(0)
  }

  const handleClear = () => {
    dispatch(clearSchedule())
    dispatch(setElapsedTime(0))
    dispatch(setTargetTime(0))
    dispatch(setPeriod(-1))
    dispatch(setIsWorking(false))
    clearScheduleAPI()
  }

  return (
    <>
      <div>
        <input type={'number'} step={5} min={0} value={userTime} onChange={(e) => setUserTime(parseInt(e.target.value))}></input>

        <button style={{margin: '5px'}} onClick={() => handleOnClick(userTime)}>
          Set
        </button>
      </div>

      <div>
        <button style={{margin: '5px'}} onClick={() => handleOnClick(25)}>
          +25
        </button>

        <button style={{margin: '5px'}} onClick={() => handleOnClick(5)}>
          +5
        </button>

        <button style={{margin: '5px'}} onClick={() => handleOnClick(50)}>
          +50
        </button>

        <button style={{margin: '5px'}} onClick={() => handleOnClick(10)}>
          +10
        </button>
      </div>

      <div>
        <button style={{margin: '5px', marginRight: '10px'}} onClick={handleClear}>
          clear schedule
        </button>
      </div>
    </>
  )
}

export default ScheduleInput