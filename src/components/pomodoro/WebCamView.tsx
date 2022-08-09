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
    <>
      <div>
        {recordWebcam.status}
      </div>
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




          {/* (recordWebcam.status === CAMERA_STATUS.CLOSED) ?
            <WebCamClosedView recordWebcam={recordWebcam}/>
            :
            (recordWebcam.status === CAMERA_STATUS.PREVIEW) ?
              <div className='default-view' onClick={analyzeVideo}>
                <span className='no-high'>
                  <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
                    CLICK
                  </p>
                  <p style={{textAlign: 'center', margin: '0', fontSize: '2vw'}}>
                    TO
                  </p>
                  <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
                    ANALYZE
                  </p>
                </span>
              </div>
              :
              <div className='default-view' style={{overflow: 'hidden'}} onClick={closeWebcam}>
                <video
                ref={recordWebcam.webcamRef}
                style={{
                  objectFit: 'cover',
                  minWidth: '100%',
                  minHeight: '100%',
                  display: `${
                    recordWebcam.status === CAMERA_STATUS.OPEN ||
                    recordWebcam.status === CAMERA_STATUS.RECORDING
                      ? "block"
                      : "none"
                  }`
                }}
                autoPlay
                muted
                />
              </div>
        } */}
      </div>
    </>
  )
}

export default WebCamView