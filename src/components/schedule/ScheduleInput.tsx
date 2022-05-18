import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addSchedule, clearSchedule, setIsRepeat, setPeriod } from '../../features/schedule/scheduleSlice'
import useScheduleAPI from '../api/useScheduleAPI'
import { setElapsedTime, setIsWorking, setTargetTime } from '../../features/pomodoro/pomodoroSlice'


const ScheduleInput = () => {
  const { isRepeat, id } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()
  const [userTime, setUserTime] = useState<number>(0)

  const handleOnClick = (time: number) => {
    dispatch(addSchedule(time*60))
    setUserTime(0)
  }

  const handleClear = () => {
    dispatch(clearSchedule())
    dispatch(setElapsedTime(0))
    dispatch(setTargetTime(0))
    dispatch(setPeriod(-1))
    dispatch(setIsWorking(false))
  }

  const { loadSchedule, updateSchedule } = useScheduleAPI()


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
        <button style={{margin: '5px'}} onClick={loadSchedule}>
          load
        </button>

        <button style={{margin: '5px'}} onClick={() => updateSchedule(id)}>
          update
        </button>
        
        <button style={{margin: '5px', marginRight: '10px'}} onClick={handleClear}>
          clear
        </button>
        <label className='no-high' htmlFor='repeat'>repeat</label>
        <input type={'checkbox'} id='repeat' checked={isRepeat} onChange={() => dispatch(setIsRepeat(!isRepeat))}/>
      </div>
    </>
  )
}

export default ScheduleInput