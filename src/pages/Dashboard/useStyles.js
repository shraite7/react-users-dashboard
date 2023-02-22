import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    display: 'flex',
    height: '100vh',
  },
  rightSideContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 30,
    gap: 54,
    width: 'calc(100% - 248px)',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default useStyles
