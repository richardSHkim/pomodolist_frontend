import React, { useState } from 'react'
import '../../styles/PomodoroPage.css'
import CircleView from './CircleView'
import TimerButton from './TimerButton'
import TimerView from './TimerView'

export const PomodoroPage = () => {
  return (
    <>
      <div className='circle-view'>
        <CircleView/>
      </div>
      <div className='timer-view'>
        <TimerView/>
      </div>
      <div>
        <TimerButton/>
      </div>
    </>
  )
}
