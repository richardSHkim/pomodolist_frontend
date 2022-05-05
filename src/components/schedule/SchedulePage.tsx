import React, { useState } from 'react'
import '../../styles/SchedulePage.css'
import ScheduleInput from './ScheduleInput'
import ScheduleListView from './ScheduleListView'

const SchedulePage = () => {
  const [scheduleArray, setScheduleArray] = useState<number[]>([])

  return (
    <>
      <div className='schedule-listview'>
        <ScheduleListView scheduleArray={scheduleArray} setScheduleArray={setScheduleArray}/>
      </div>

      <div className='schedule-input'>
        <ScheduleInput scheduleArray={scheduleArray} setScheduleArray={setScheduleArray}/>
      </div>
    </>
  )
}

export default SchedulePage