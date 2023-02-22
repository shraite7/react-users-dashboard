import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  leftSideContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20,
    backgroundColor: theme.palette.background.dark,
    width: 240,
    boxSizing: 'border-box',
    [theme.breakpoints.down('800')]: {
      width: '20%',
    },
  },
  leftSideLogo: {
    display: 'flex',
    margin: '17px 0 51px 34px',
  },
  [theme.breakpoints.down('800')]: {
    navBarContainer: {
      '& .MuiListItemText-root': {
        display: 'none',
      },
      '& .MuiButtonBase-root': {
        margin: 0,
        padding: 0,
      },
    },
    leftSideLogo: {
      display: 'none',
    },
    leftSideContainer: {
      width: 60,
      padding: '20px 10px',
    },
  },
}))

export default useStyles
