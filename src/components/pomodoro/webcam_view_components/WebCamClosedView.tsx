import React from 'react'
import { RecordWebcamHook } from 'react-record-webcam'
import { useAppSelector } from '../../../hooks'

interface propsType {
  'recordWebcam': RecordWebcamHook,
  'recordWebcamView': RecordWebcamHook,
}

const WebCamClosedView = (props: propsType) => {
  const { isWorking } = useAppSelector((state) => state.pomodoro)

  const openCamera = () => {
    props.recordWebcam.open()
    props.recordWebcamView.open()
  }

  return (
    (isWorking) ?
      <div className='default-view'>
        <span className='no-high'>
          <p style={{textAlign: 'center', margin: '0', fontSize: '2vw'}}>
            CAN NOT OPEN CAMERA <br/> while <br/> POMODORO is RUNNING
          </p>
        </span>
      </div>  
      :
      <div className='default-view' onClick={openCamera}>
        <span className='no-high'>
          <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
            CLICK
          </p>
          <p style={{textAlign: 'center', margin: '0', fontSize: '2vw'}}>
            TO
          </p>
          <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
            OPEN <br/> CAMERA
          </p>
        </span>
      </div>  
  )
}

export default WebCamClosedView