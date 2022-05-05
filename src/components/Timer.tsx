import React, { useEffect, useState } from 'react'

interface Props {
  time: number,
  setTime: React.Dispatch<React.SetStateAction<number>>
}

const Timer = ({ time, setTime }: Props) => {

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
    <>
      {time}
    </>
  )
}

export default Timer