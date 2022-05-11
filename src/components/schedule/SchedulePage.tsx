import React, { useState } from 'react'
import '../../styles/SchedulePage.css'
import ScheduleInput from './ScheduleInput'
import ScheduleListView from './ScheduleListView'
import ScheduleButton from './ScheduleButton'

const SchedulePage = () => {

  return (
    <>
      {/* <div className='schedule-button'>
        <ScheduleButton/>
      </div> */}

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