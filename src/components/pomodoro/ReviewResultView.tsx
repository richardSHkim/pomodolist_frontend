import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useAppSelector } from '../../hooks'

const ReviewResultView = () => {
  const { reviewResult, REVIEW_RESULT_INIT } = useAppSelector((state) => state.pomodoro)

  const data = {
    labels: ['Working', 'Missing', 'Sleeping', 'Phubbing'],
    datasets: [{
      label: 'timer',
      data: reviewResult,
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        // 'rgb(245, 230, 235)',
        // 'rgb(250, 207, 222)',
        // 'rgb(210, 218, 233)',
        // 'rgb(254, 240, 214)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
      animation: false,
    }]
  }

  return (
    <>
      {
        (JSON.stringify(reviewResult) === JSON.stringify(REVIEW_RESULT_INIT)) ?
          <div className='timer-view'>
            <div className='default-view'>
              <span className='no-high'>
                <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
                  REVIEW
                </p>
                <p style={{textAlign: 'center', margin: '0', fontSize: '2vw'}}>
                  YOUR
                </p>
                <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
                  POMODORO
                </p>
              </span>
            </div>
          </div>
          :
          <div className='timer-view'>
            <div className='circle-view'>
              <Pie data={data} />
            </div>
          </div>
      }
    </>

  )
}

export default ReviewResultView