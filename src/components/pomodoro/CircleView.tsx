import React, { useEffect, useRef } from 'react'
import '../../styles/CircleView.css'

const CircleView = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    canvas.style.width = '100%'

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, 50, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, 50, 0, 2 * Math.PI);
    context.stroke();
  })

  return (
    <canvas className='my-canvas' ref={canvasRef}></canvas>
  )
}

export default CircleView