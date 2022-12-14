import React from 'react'
import { useAppSelector } from '../../hooks'
import CircleView from './timer_view_components/CircleView'
import CircleViewNotReady from './timer_view_components/CircleViewNotReady'

const TimerView = () => {
  const { period } = useAppSelector((state) => state.schedule)

  return (
    <div className='timer-view'>
      {(period === -1) ? 
        <div className='default-view'>
          <CircleViewNotReady/>
        </div>
        :
        <div className='circle-view'>
          <CircleView/>
        </div>
      }
    </div>
  )
}

export default TimerView