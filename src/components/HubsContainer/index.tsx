import { getAllHubs } from 'api/hubsApi'
import { useQuery } from 'react-query'

const HubsContainer = () => {
  const { isLoading, isError, data, error } = useQuery('hubs', getAllHubs)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError && error instanceof Error) {
    return <div>Error: {error.message}</div>
  }

  return <>{JSON.stringify(data)}</>
}

export default HubsContainer
