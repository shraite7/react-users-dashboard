import React from 'react'
import PropTypes from 'prop-types'

// Components
import InfoDrawer from '../../../components/InfoDrawer'

// Assets
import { Avatar } from '@mui/material'

// Styles
import useStyles from '../useStyles'

const UserInfo = ({ isOpen, userData, toggleDrawer }) => {
  const classes = useStyles()
  const { address, userName, thumbnail } = userData
  return (
    <InfoDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
      <div className={classes.infoContainer}>
        <div className={classes.infoHeader} />
        <Avatar
          src={thumbnail}
          alt={`Avatar for user`}
          imgProps={{ loading: 'lazy' }}
          className={classes.infoAvatar}
          sx={{
            width: 132,
            height: 132,
            border: '2px solid #DFE0EB',
            borderColor: 'primary.200',
            bgcolor: 'grey.800',
          }}
        />
        <div className={classes.userInfoSecion}>
          <div className={classes.titleText}>{userName}</div>
          <div className={classes.subTitleText}>{address}</div>
        </div>
      </div>
    </InfoDrawer>
  )
}

UserInfo.propTypes = {
  open: PropTypes.bool,
  userData: PropTypes.object,
  toggleDrawer: PropTypes.func,
}

UserInfo.defaultProps = {
  open: false,
  userData: {},
  toggleDrawer: () => {},
}

export default UserInfo
