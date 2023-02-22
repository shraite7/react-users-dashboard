import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  filterSection: {
    display: 'flex',
    gap: 14,
    height: 40,
    '& > input': {
      border: '1px solid #DFE0EB',
      borderRadius: 3,
      padding: 10,
      fontWeight: theme.typography.fontWeightM,
      fontSize: theme.typography.fontSize,
      '& ::placeholder': {
        color: theme.typography.fontHeader.colorGray_2,
      },
      lineHeight: 20,
    },
  },
  [theme.breakpoints.down('600')]: {
    filterSection: {
      flexDirection: 'column',
      height: 'fit-content',
      '& input': {
        height: 30,
      },
    },
  },
}))

export default useStyles
