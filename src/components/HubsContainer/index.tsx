import { getAllHubs } from 'api/hubsApi'
import { useQuery } from 'react-query'
import Box from '@mui/material/Box'

import Loader from 'components/Loader'
import ErrorDisplay from 'components/ErrorDisplay'

const HubsContainer = () => {
  const { isLoading, isError, data, error } = useQuery('hubs', getAllHubs)

  if (isLoading) {
    return <Loader />
  }

  if (isError && error instanceof Error) {
    return <ErrorDisplay error={error} />
  }

  return <Box>{JSON.stringify(data)}</Box>
}

export default HubsContainer
