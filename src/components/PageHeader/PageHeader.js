import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Avatar } from '@mui/material'

// Helpers
import usePageHeader from './usePageHeader'

// Styles
import useStyles from './useStyles'

const PageHeader = ({ title }) => {
  const classes = useStyles()
  const { userName, userIcon } = usePageHeader()

  return (
    <div className={classes.pageHeaderContainer}>
      <span className={classes.headerTitle}>{title}</span>
      <div className={classes.currentUserInfo}>
        <span className={classes.userNameText}>{userName}</span>
        <Avatar
          src={userIcon}
          alt={`Avatar for user`}
          imgProps={{ loading: 'lazy' }}
          sx={{
            width: 40,
            height: 40,
            border: '2px solid #DFE0EB',
            borderColor: 'primary.200',
            bgcolor: 'grey.800',
          }}
        />
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
}

PageHeader.defaultProps = {
  title: '',
}

export default PageHeader
