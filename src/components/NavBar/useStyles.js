import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  navBar: {
    padding: '0 !important',
    width: '100%',
  },
  menuItem: {
    gap: 24,
    height: 56,
    padding: '0 12px !important',
    textAlign: 'left',
    color: `${theme.palette.primary.main} !important`,
  },
}))

export default useStyles
