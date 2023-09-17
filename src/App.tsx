import { QueryClient, QueryClientProvider } from 'react-query'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import HubsContainer from 'components/HubsContainer'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const queryClient = new QueryClient({})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container component="main">
        <Typography variant="h2" gutterBottom>
          Hub List
        </Typography>
        <HubsContainer />
      </Container>
    </QueryClientProvider>
  )
}

export default App
