import React, { useState } from 'react'

const CarouselView = (props: {'index': number, 'items': JSX.Element[]}) => {
  return (
    props.items[props.index]
  )
}

export default CarouselView