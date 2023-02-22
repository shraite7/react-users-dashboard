import React, { useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// Components
import { ListItemText, MenuItem, MenuList } from '@mui/material'

// Routes
import routes from '../../routes'

// Styles
import useStyles from './useStyles'

const NavBar = () => {
  const classes = useStyles()
  const location = useLocation()

  const isActiveRoute = useCallback(
    (routeName) => {
      return location.pathname.startsWith(routeName) ? true : false
    },
    [location.pathname]
  )

  return (
    <MenuList className={classes.navBar}>
      {routes.map(({ basePath, sidebarName, icon }, key) => (
        <NavLink
          key={key}
          to={basePath}
          style={{
            textDecoration: 'none',
          }}
        >
          <MenuItem selected={isActiveRoute(basePath)} className={classes.menuItem}>
            {icon && icon}
            <ListItemText primary={sidebarName} />
          </MenuItem>
        </NavLink>
      ))}
    </MenuList>
  )
}

export default NavBar
