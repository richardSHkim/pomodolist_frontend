import React from 'react'
import { useAppSelector } from '../../hooks'
import ScheduleItem from './ScheduleItem'


const ScheduleListView = () => {
  const { schedule } = useAppSelector((state) => state.schedule)


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