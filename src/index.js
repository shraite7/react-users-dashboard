import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Styles
import './index.css'
import theme from './styles/theme'
import { ThemeProvider } from '@mui/material'

const root = document.getElementById('root')
render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  root
)
