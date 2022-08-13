import React, { useEffect, useState } from 'react'
import { useRecordWebcam, CAMERA_STATUS } from 'react-record-webcam'
import { useAppSelector } from '../../hooks'
import WebCamClosedView from './webcam_view_components/WebCamClosedView'
import WebCamOpenView from './webcam_view_components/WebCamOpenView'

const WebCamView = () => {
  const { isWorking, elapsedTime } = useAppSelector((state) => state.pomodoro)

  const recordWebcam = useRecordWebcam();
  const recordWebcamView = useRecordWebcam();

  useEffect(() => {
    if (isWorking && recordWebcam.status === CAMERA_STATUS.OPEN) {
      recordWebcam.start()
    }
    if (!isWorking && recordWebcam.status === CAMERA_STATUS.RECORDING) {
      recordWebcam.stop()
      recordWebcam.retake()
    }
  }, [isWorking])

  // for Debug
  useEffect(() => {
    console.log(recordWebcam.status, recordWebcamView.status)
  }, [elapsedTime, recordWebcam.status, recordWebcamView.status])


  return (
    <div className='timer-view'>
      {
        (recordWebcam.status === CAMERA_STATUS.CLOSED) ?
          <WebCamClosedView recordWebcam={recordWebcam} recordWebcamView={recordWebcamView} />
          :
          <WebCamOpenView recordWebcam={recordWebcam} recordWebcamView={recordWebcamView}/>
      }
    </div>
  )
}

export default WebCamView