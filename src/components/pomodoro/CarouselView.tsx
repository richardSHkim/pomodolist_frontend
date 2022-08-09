import React, { useState } from 'react'
import Carousel from "react-material-ui-carousel";
import TimerView from './TimerView';

const CarouselView = () => {
  const [items, setItems] = useState([<TimerView/>])
  const [index, setIndex] = useState(0)

  return (
    <Carousel
      index={index}
      autoPlay={false}
      navButtonsAlwaysVisible
      animation='fade'
      cycleNavigation
      className='carousel-view'
    >
      {
        items.map( (item, i) => {
          return item
        })
      }
    </Carousel>
  )
}

export default CarouselView