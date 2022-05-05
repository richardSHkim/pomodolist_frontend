import React, { useEffect, useState } from 'react'
import ScheduleItem from './ScheduleItem'

interface Props {
  scheduleArray: number[],
  setScheduleArray: React.Dispatch<React.SetStateAction<number[]>>
}

const ScheduleListView = ({ scheduleArray, setScheduleArray }: Props) => {
  const scheduleList: JSX.Element[] = scheduleArray.map((item, index) => {
    return (
      <div key={index}>
        <ScheduleItem item={item}/>
      </div>
    )
  })

  return (
    <>
      {scheduleList}
    </>
  )
}

export default ScheduleListView