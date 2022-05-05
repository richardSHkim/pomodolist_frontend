import React, { useState } from 'react'
import '../styles/PomodoroPage.css'
import SetTimer from './SetTimer'
import Timer from './Timer'

export const PomodoroPage = () => {
  const [time, setTime] = useState<number>(0)


  return (
    <>
      <div className='timer-view'>
        <Timer time={time} setTime={setTime}/>
      </div>
      <div className='timer-user'>
        <SetTimer time={time} setTime={setTime}/>
      </div>
    </>
  )
}
