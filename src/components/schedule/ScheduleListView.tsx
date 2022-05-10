import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks'
import ScheduleItem from './ScheduleItem'


const ScheduleListView = () => {
  const { schedule } = useAppSelector((state) => state.schedule)
  const scheduleList: JSX.Element[] = schedule.map((item, index) => {
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