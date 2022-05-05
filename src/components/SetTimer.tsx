import React, { useEffect, useState } from 'react'

interface Props {
  time: number,
  setTime: React.Dispatch<React.SetStateAction<number>>
}

const SetTimer = ({ time, setTime }: Props) => {
  const [userTime, setUserTime] = useState<number>(0)

  return (
    <div>
      <input type={'number'} value={userTime} onChange={(e) => setUserTime(parseInt(e.target.value))}></input>
      <button onClick={() => {
        setTime(userTime)
        setUserTime(0)
        }}>Set</button>
    </div>
  )
}

export default SetTimer