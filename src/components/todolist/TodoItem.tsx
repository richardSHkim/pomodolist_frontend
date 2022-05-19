import React, { useState } from 'react'

interface Props {
  todo: string,
  index: number
}

const TodoItem = ({ todo, index }: Props) => {
  const [done, setDone] = useState(false)

  return (
    <>
      <div className='no-high' onClick={() => setDone(!done)}>
        {(done) ? <del>{todo}</del> : todo}
      </div>
    </>
  )
}

export default TodoItem