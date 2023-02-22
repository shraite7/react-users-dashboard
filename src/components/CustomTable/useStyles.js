import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: 'calc(100vh - 152px)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.light,
    borderRadius: 8,
  },
  headerSection: {
    width: '100%',
    display: 'flex',
    padding: 20,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiPaper-root': {
      borderRadius: 8,
    },
  },
  tableTitle: {
    padding: 12,
    fontSize: theme.typography.fontSizeL,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: '22px',
  },
  [theme.breakpoints.down('800')]: {
    headerSection: {
      flexWrap: 'wrap',
    },
  },
  [theme.breakpoints.down('800')]: {
    headerSection: {
      flexDirection: 'column',
    },
  },
}))

export default useStyles
