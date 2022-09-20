import React from 'react'
import { IconButton, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubLink = () => {
  return (
    <IconButton aria-label="delete" href='https://github.com/richardSHkim/pomodolist_frontend' target={'_blank'}>
      <GitHubIcon/>
    </IconButton>
  )
}

export default GitHubLink