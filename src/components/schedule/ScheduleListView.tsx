import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks'
import ScheduleItem from './ScheduleItem'


const ScheduleListView = () => {
  const { schedule } = useAppSelector((state) => state.schedule)

  // load init schedule from db server
  useEffect(() => {
    fetch('http://localhost:8000/api/schedule', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])

  const scheduleList: JSX.Element[] = schedule.map((item, index) => {
    return (
      <div key={index} style={{padding: "5px"}}>
        <ScheduleItem item={item/60} index={index}/>
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