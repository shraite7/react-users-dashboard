import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  formattedCellContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  },
  userIcon: {
    width: 44,
    height: 44,
    marginLeft: 16,
    borderRadius: '50%',
  },
  textCell: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  boldText: {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightM,
    color: theme.typography.fontHeader.color,
    lineHeight: '20px',
  },
  regularText: {
    fontSize: theme.typography.fontSizeS,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.typography.fontHeader.colorGray_1,
    lineHeight: '16px',
  },
  infoContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 88,
    position: 'relative',
    '& .MuiAvatar-root': {
      position: 'absolute',
    },
  },
  infoHeader: {
    height: 158,
    backgroundColor: '#528CFC',
  },
  infoAvatar: {
    left: 0,
    right: 0,
    top: 92,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  userInfoSecion: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: 10,
  },
  titleText: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.typography.fontHeader.color,
    lineHeight: '20px',
  },
  subTitleText: {
    fontSize: theme.typography.fontSizeM,
    fontWeight: theme.typography.fontWeightRegular,
    color: '#87888C',
    lineHeight: '16px',
  },
  [theme.breakpoints.down('800')]: {
    infoContainer: {
      '& .MuiAvatar-root': {
        height: 50,
        width: 50,
        top: 134,
      },
    },
  },
}))

export default useStyles
