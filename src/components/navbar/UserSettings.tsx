import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setIsRepeat } from '../../features/schedule/scheduleSlice'

const UserSettings = () => {
  const { isRepeat } = useAppSelector((state) => state.schedule)
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton aria-label="delete" onClick={() => setOpen(true)}>
        <SettingsIcon/>
      </IconButton>
      <Dialog className='no-high' open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          Settings
        </DialogTitle>
        <DialogContent>
          <FormControlLabel control={<Checkbox checked={isRepeat} onClick={() => dispatch(setIsRepeat(!isRepeat))}/>} label="Repeat Schedule" />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UserSettings