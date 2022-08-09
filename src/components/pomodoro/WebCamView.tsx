import React, { useEffect, useState } from 'react'
import { useRecordWebcam, CAMERA_STATUS } from 'react-record-webcam'
import { useAppSelector } from '../../hooks'
import WebCamClosedView from './webcam_view_components/WebCamClosedView'
import WebCamOpenView from './webcam_view_components/WebCamOpenView'
import WebCamPreview from './webcam_view_components/WebCamPreview'

const WebCamView = () => {
  const { isWorking } = useAppSelector((state) => state.pomodoro)

  const recordWebcam = useRecordWebcam();

  useEffect(() => {
    if (isWorking && recordWebcam.status === CAMERA_STATUS.OPEN) {
      recordWebcam.start()
    }
    if (!isWorking && recordWebcam.status === CAMERA_STATUS.RECORDING) {
      recordWebcam.stop()
    }
  }, [isWorking])

  return (
    <div className='timer-view'>
      {(() => {
        switch (recordWebcam.status) {
          case CAMERA_STATUS.CLOSED:
            return <WebCamClosedView recordWebcam={recordWebcam} />

          case CAMERA_STATUS.PREVIEW:
            return <WebCamPreview recordWebcam={recordWebcam} />

          default:
            return <WebCamOpenView recordWebcam={recordWebcam} />
        }
      })()}
    </div>
  )
}

export default WebCamView