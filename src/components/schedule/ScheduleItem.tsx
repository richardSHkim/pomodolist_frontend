import React from 'react'
import { useAppSelector } from '../../hooks'

interface Props {
  item: number,
  index: number
}

const ScheduleItem = ({ item, index }: Props) => {
  const { period } = useAppSelector((state) => state.schedule)
  if (index === period) {
    return (
      <span>
        {item} *
      </span>
    )
  }
  else {
    return (
      <span>
        {item}
      </span>
    )
  }

}

export default ScheduleItem