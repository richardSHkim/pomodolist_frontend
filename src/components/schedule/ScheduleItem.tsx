import React from 'react'

interface Props {
    item: number,
  }

const ScheduleItem = ({ item }: Props) => {
  return (
    <>
      {item}
    </>
  )
}

export default ScheduleItem