import React, { useState } from 'react'
import '../../styles/PomodoroPage.css'

import CircleView from './CircleView'
import QuickInput from './QuickInput'
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

      <div className='quick-input'>
        <QuickInput/>
      </div>
    </>
  )
}
