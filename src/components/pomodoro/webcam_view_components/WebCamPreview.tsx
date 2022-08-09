import React from 'react'
import { RecordWebcamHook } from 'react-record-webcam'

interface propsType {
  'recordWebcam': RecordWebcamHook,
}

const WebCamPreview = (props: propsType) => {
  const analyzeVideo = () => {
    props.recordWebcam.download()
    props.recordWebcam.retake()
  }

  return (
    <div className='default-view'>
      <span className='no-high'>
        <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
          SEND VIDEO
        </p>
        <p style={{textAlign: 'center', margin: '0', fontSize: '2vw'}}>
          TO
        </p>
        <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
          ANALYZE?
        </p>
        <div style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
          <button onClick={analyzeVideo}> yes </button>
          <button onClick={props.recordWebcam.retake}> no </button>
        </div>
      </span>
    </div>
  )
}

export default WebCamPreview