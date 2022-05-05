import React, { useEffect, useState } from 'react'
import '../styles/Timer.css'

const Timer = () => {
  const [time, setTime] = useState<number>(10)

  useEffect(() => {
    // count down
    let interval = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    // stop timer when time is 0
    if (time === 0) clearInterval(interval)

    return () => clearInterval(interval)
  }, [time])

  return (
    <div className='timer'>{time}</div>
  )
}

export default Timer