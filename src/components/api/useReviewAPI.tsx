import React from 'react'

const useReviewAPI = () => {
  const sendReview = async (blob: any) => {
    const formData = new FormData();
    formData.append('video', blob, 'video_to_review.mp4');
    
    const res = await fetch('/pyapi/review', {
      method: 'POST',
      body: formData
    })
    if (res.ok) {
      const data = await res.json()
      // console.log(data)
    }
  }

  return { sendReview }
}

export default useReviewAPI