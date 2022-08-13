import React from 'react'
import { setReviewResult } from '../../features/pomodoro/pomodoroSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const useReviewAPI = () => {
  const { reviewResult } = useAppSelector((state) => state.pomodoro)
  const dispatch = useAppDispatch()

  const sendReview = async (blob: any) => {
    const formData = new FormData();
    formData.append('video', blob, 'video_to_review.mp4');
    
    const res = await fetch('/pyapi/review', {
      method: 'POST',
      body: formData
    })
    if (res.ok) {
      const data = await res.json()
      dispatch(setReviewResult(reviewResult.map((e, i) => e + data.status[i])))
    }
  }

  return { sendReview }
}

export default useReviewAPI