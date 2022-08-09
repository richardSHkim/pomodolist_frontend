import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import '../../styles/PomodoroPage.css'

import CarouselView from './CarouselView'
import TimerView from './TimerView';
import DefaultView from './DefaultView';
import WebCamView from './WebCamView';
import TimerModel from './TimerModel'

export const PomodoroPage = () => {
  const [items, _] = useState([<DefaultView/>, <TimerView/>, <WebCamView/>])

  return (
    <>
      <div className='timer-view'>
        <Carousel
        autoPlay={false}
        swipe={false}
        navButtonsAlwaysVisible
        animation='slide'
        cycleNavigation
        className='carousel-view'
      >
        {
          items.map( (_, i) => {
            return <CarouselView key={i} index={i} items={items}/>
          })
        }
      </Carousel>
      </div>

      <div className='timer-model'>
        <TimerModel/>
      </div>
    </>
  )
}
