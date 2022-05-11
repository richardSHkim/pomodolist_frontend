import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setIsWorking } from '../../features/pomodoro/pomodoroSlice';
ChartJS.register(ArcElement, Tooltip);

const CircleView = () => {
  const { schedule, period } = useAppSelector((state) => state.schedule)
  const { time, isWorking } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  const data = {
    labels: ['elapsed time', 'remaining time'],
    datasets: [{
      label: 'timer',
      data: [schedule[period] - time, time],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 0,
      animation: false,
    }]
  }

  return (
    <Pie data={data} onClick={() => dispatch(setIsWorking(true))}/>
  )
}

export default CircleView