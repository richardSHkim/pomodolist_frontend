import React, { useState } from 'react'
import { useAppSelector } from '../../hooks'
import '../../styles/PomodoroPage.css'

import CircleView from './CircleView'
import DefaultView from './DefaultView'
import TimerModel from './TimerModel'

export const PomodoroPage = () => {
  const { period } = useAppSelector((state) => state.schedule)

  return (
    <>
      <div className='timer-view'>
        {(period === -1) ? 
          <div className='default-view'>
            <DefaultView/>
          </div>
          :
          <div className='circle-view'>
          <CircleView/>
          </div>
        }
      </div>

      <div className='timer-model'>
        <TimerModel/>
      </div>
    </>
  )
}
