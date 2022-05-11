import React from 'react'
import { setPeriod } from '../../features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

interface Props {
  item: number,
  index: number
}

const ScheduleItem = ({ item, index }: Props) => {
  const { period } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(setPeriod(index))
  }

  if (index === period) {
    return (
      <span onClick={handleOnClick}>
        {item} *
      </span>
    )
  }
  else {
    return (
      <span onClick={handleOnClick}>
        {item}
      </span>
    )
  }

}

export default ScheduleItem