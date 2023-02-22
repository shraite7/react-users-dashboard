import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import LeftSide from '../../components/LeftSide'

// Routes
import routes from '../../routes'

// Styles
import useStyles from './useStyles'

// Context provider
import { UserProvider } from '../../context/userContext'

const Dashboard = () => {
  const classes = useStyles()

  return (
    <UserProvider>
      <div className={classes.dashboardContainer}>
        <LeftSide />
        <div className={classes.rightSideContainer}>
          <Routes>
            {routes.map(({ basePath, component }) => (
              <Route exact path={basePath} key={basePath} element={component} />
            ))}
            {routes
              .filter(({ path }) => !!path)
              .map(({ path, component }) => (
                <Route exact path={path} key={path} element={component} />
              ))}
          </Routes>
        </div>
      </div>
    </UserProvider>
  )
}

export default Dashboard
