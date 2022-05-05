import React, { useState } from 'react'

interface Props {
  scheduleArray: number[],
  setScheduleArray: React.Dispatch<React.SetStateAction<number[]>>
}

const ScheduleInput = ({ scheduleArray, setScheduleArray }: Props) => {
  const [userTime, setUserTime] = useState<number>(0)

  return (
    <>
      <input type={'number'} step={5} min={0} value={userTime} onChange={(e) => setUserTime(parseInt(e.target.value))}></input>
      <button onClick={() => {
        setScheduleArray([...scheduleArray, userTime])
        setUserTime(0)
        }}>Set</button>
    </>
  )
}

export default ScheduleInput