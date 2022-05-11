import React, { useState } from 'react'
import '../../styles/PomodoroPage.css'

import CircleView from './CircleView'
import TimerModel from './TimerModel'

export const PomodoroPage = () => {
  return (
    <>
      <div className='circle-view'>
        <div className='square-view'>
          <CircleView/>
        </div>
      </div>

      <div className='timer-model'>
        <TimerModel/>
      </div>
    </>
  )
}
