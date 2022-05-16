import React, { useState } from 'react'
import '../../styles/SchedulePage.css'
import useScheduleAPI from '../api/useScheduleAPI'
import ScheduleInput from './ScheduleInput'
import ScheduleListView from './ScheduleListView'

const SchedulePage = () => {
  useScheduleAPI()
  
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