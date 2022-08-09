import React, { useState } from 'react'
import Carousel from "react-material-ui-carousel";


const CarouselView = (props: {'index': number, 'items': JSX.Element[]}) => {
  return (
    props.items[props.index]
  )
}

export default CarouselView