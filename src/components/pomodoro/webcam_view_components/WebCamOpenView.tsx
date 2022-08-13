import React, { useEffect, useRef } from 'react'
import { CAMERA_STATUS, RecordWebcamHook } from 'react-record-webcam'
import { useAppSelector } from '../../../hooks'
import useReviewAPI from '../../api/useReviewAPI'

interface propsType {
  'recordWebcam': RecordWebcamHook,
  'recordWebcamView': RecordWebcamHook,
}

const WebCamOpenView = (props: propsType) => {
  const { elapsedTime, isWorking } = useAppSelector((state) => state.pomodoro)
  const { sendReview } = useReviewAPI()

  const closeWebcam = () => {
    if (props.recordWebcam.status === CAMERA_STATUS.OPEN) {
      props.recordWebcam.close()
      props.recordWebcamView.close()
    }
  }

  useEffect(() => {
    const reviewVideo = async () => {
      await props.recordWebcam.stop()
      const blob = await props.recordWebcam.getRecording();
      props.recordWebcam.retake()
      const results = await sendReview(blob)
    }

    if (isWorking) {
      if (props.recordWebcam.status === CAMERA_STATUS.OPEN) {
        props.recordWebcam.start()
      }
      if (elapsedTime && elapsedTime % 10 == 0) {
        reviewVideo()
      }
    }
  }, [elapsedTime, props.recordWebcam.status])
  
  return (
    <div className='default-view' style={{overflow: 'hidden'}} onClick={closeWebcam}>
      <video
        ref={props.recordWebcamView.webcamRef}
        style={{
          objectFit: 'cover',
          minWidth: '100%',
          minHeight: '100%',
          display: `${
            props.recordWebcamView.status === CAMERA_STATUS.OPEN ||
            props.recordWebcamView.status === CAMERA_STATUS.RECORDING
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