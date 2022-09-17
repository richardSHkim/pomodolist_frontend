import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks'
import useScheduleAPI from '../api/useScheduleAPI'
import ScheduleItem from './ScheduleItem'

const ScheduleListView = () => {
  const { schedule } = useAppSelector((state) => state.schedule)
  const { loadScheduleAPI } = useScheduleAPI()

  useEffect(() => {
    loadScheduleAPI()
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