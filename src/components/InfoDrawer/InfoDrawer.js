import React from 'react'
import PropTypes from 'prop-types'

// Components
import Drawer from '@mui/material/Drawer'

// Styles
import useStyles from './useStyles'

const InfoDrawer = ({ isOpen, toggleDrawer, anchor, children }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={() => toggleDrawer(false)}
      BackdropProps={{ invisible: true }}
      classes={{
        root: classes.drawerContainer,
      }}
    >
      {children}
    </Drawer>
  )
}

InfoDrawer.propTypes = {
  isOpen: PropTypes.bool,
  anchor: PropTypes.string,
  toggleDrawer: PropTypes.func,
  children: PropTypes.element,
}

InfoDrawer.defaultProps = {
  isOpen: false,
  anchor: 'right',
  toggleDrawer: () => {},
  children: <></>,
}

export default InfoDrawer
