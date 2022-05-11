import React, { useState } from 'react'
import '../../styles/PomodoroPage.css'

import CircleView from './CircleView'
import TimerModel from './TimerModel'

export const PomodoroPage = () => {
  return (
    <>
      <CircleView/>
      <TimerModel/>
    </>
  )
}
