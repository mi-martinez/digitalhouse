import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const themeDH = createTheme({
  palette: {
    primary: {
      main: '#52AC88',
    },
    secondary: {
      main: '#26a69a',
    },
    error: {
      main: '#ff1744',
    },
    black: {
      main: '#000000',
    },
  },
})

const App = () => (
  <ThemeProvider theme={themeDH}>
    <CssBaseline />
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ThemeProvider>
)

export default App
