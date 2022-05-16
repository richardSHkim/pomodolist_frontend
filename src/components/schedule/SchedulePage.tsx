import React, { useState } from 'react'
import '../../styles/SchedulePage.css'
import useLoadSchedule from '../api/useLoadSchedule'
import ScheduleInput from './ScheduleInput'
import ScheduleListView from './ScheduleListView'

const SchedulePage = () => {
  useLoadSchedule()

  return (
    <>
      <div className='schedule-input'>
        <ScheduleInput/>
      </div>

      <div className='schedule-listview'>
        <ScheduleListView/>
      </div>
    </>
  )
}

export default SchedulePage