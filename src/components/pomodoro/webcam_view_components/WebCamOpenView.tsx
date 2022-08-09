import React from 'react'
import { CAMERA_STATUS, RecordWebcamHook } from 'react-record-webcam'

interface propsType {
  'recordWebcam': RecordWebcamHook,
}

const WebCamOpenView = (props: propsType) => {
  const closeWebcam = () => {
    if (props.recordWebcam.status === CAMERA_STATUS.OPEN) {
      props.recordWebcam.close()
    }
  }

  return (
    <div className='default-view' style={{overflow: 'hidden'}} onClick={closeWebcam}>
      <video
        ref={props.recordWebcam.webcamRef}
        style={{
          objectFit: 'cover',
          minWidth: '100%',
          minHeight: '100%',
          display: `${
            props.recordWebcam.status === CAMERA_STATUS.OPEN ||
            props.recordWebcam.status === CAMERA_STATUS.RECORDING
              ? "block"
              : "none"
          }`
        }}
        autoPlay
        muted
      />
    </div>  
  )
}

export default WebCamOpenView