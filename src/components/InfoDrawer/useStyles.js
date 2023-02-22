import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.background.light,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      width: 545,
      maxWidth: '35%',
    },
  },
}))

export default useStyles
