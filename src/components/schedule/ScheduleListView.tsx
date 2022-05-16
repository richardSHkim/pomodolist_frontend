import React, { useEffect, useState } from 'react'
import { addSchedule, setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import ScheduleItem from './ScheduleItem'


const ScheduleListView = () => {
  const { schedule } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()

  // load init schedule from db server
  useEffect(() => {
    fetch('/api/schedule', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
      if (data.length) {
        for (const d of data[0].schedule) {
          dispatch(addSchedule(parseInt(d)*60))
        }
      }
      else console.log('no schedule in DB')
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