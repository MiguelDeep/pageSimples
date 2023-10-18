import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details/Details.jsx'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/global.js'

import theme from './style/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />

    </ThemeProvider>
  </React.StrictMode>,
)
