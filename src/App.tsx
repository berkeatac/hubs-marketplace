import { QueryClient, QueryClientProvider } from 'react-query'

import HubsContainer from 'components/HubsContainer'

const queryClient = new QueryClient({})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className="mt-4 text-center text-2xl">Hub List</h1>
        <HubsContainer />
      </div>
    </QueryClientProvider>
  )
}

export default App
