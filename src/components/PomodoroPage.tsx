import React, { useState } from 'react'
import '../styles/PomodoroPage.css'
import TimerInput from './TimerInput'
import TimerView from './TimerView'

export const PomodoroPage = () => {
  const [time, setTime] = useState<number>(0)

  return (
    <>
      <div className='timer-view'>
        <TimerView time={time} setTime={setTime}/>
      </div>
      <div className='timer-input'>
        <TimerInput time={time} setTime={setTime}/>
      </div>
    </>
  )
}
