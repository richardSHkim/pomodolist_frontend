import React, { useState } from 'react'
import '../../styles/PomodoroPage.css'
import TimerButton from './TimerButton'
import TimerView from './TimerView'

export const PomodoroPage = () => {
  return (
    <>
      <div className='timer-view'>
        <TimerView/>
      </div>
      <div>
        <TimerButton/>
      </div>
    </>
  )
}
