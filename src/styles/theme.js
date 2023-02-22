import { createTheme } from '@mui/material/styles'
import { green, grey, red } from '@mui/material/colors'

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#A4A6B3',
      dark: '#363740',
    },
    secondary: {
      light: '#fff5f8',
      main: '#F7F8FC',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
    fontSizeS: 12,
    fontSizeM: 14,
    fontSizeL: 20,
    fontSizeXL: 24,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightM: 600,
    fontWeightMedium: 700,
  },
})

const fontHeader = {
  color: '#252733',
  colorGray_1: '#C5C7CD',
  colorGray_2: '#9FA2B4',
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: 'Mulish, sans-serif',
  textTransform: 'uppercase',
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: '#E5E5E5',
      dark: '#363740',
      light: '#FFFFFF',
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
}

export default theme
