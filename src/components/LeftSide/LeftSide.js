import React from 'react'

// Assets
import { ReactComponent as Logo } from '../../assets/logo-white.svg'

// Styles
import useStyles from './useStyles'
import NavBar from '../NavBar/NavBar'

const LeftSide = () => {
  const classes = useStyles()
  return (
    <div className={classes.leftSideContainer}>
      <div className={classes.leftSideLogo}>
        <Logo />
      </div>
      <div className={classes.navBarContainer}>
        <NavBar />
      </div>
    </div>
  )
}
export default LeftSide
