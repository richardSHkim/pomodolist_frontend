import React, { useState } from 'react'
import '../../styles/PomodoroPage.css'

import CarouselView from './CarouselView'
import TimerModel from './TimerModel'

export const PomodoroPage = () => {

  return (
    <>
      <div className='timer-view'>
        <CarouselView/>
      </div>

      <div className='timer-model'>
        <TimerModel/>
      </div>
    </>
  )
}
