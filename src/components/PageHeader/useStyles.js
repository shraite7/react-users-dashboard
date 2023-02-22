import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  pageHeaderContainer: {
    display: 'flex',
    width: '100%',
    height: 44,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: theme.typography.fontSizeXL,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.typography.fontHeader.color,
    lineHeight: '30px',
  },
  currentUserInfo: {
    display: 'flex',
    lineHeight: '44px',
    alignItems: 'center',
    gap: 14,
  },
  userNameText: {
    fontWeight: 600,
    lineHeight: '20px',
  },
}))

export default useStyles
