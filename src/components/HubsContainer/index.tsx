import { useQuery } from 'react-query'
import Grid from '@mui/material/Grid'

import { getAllHubs } from 'api/hubsApi'
import Loader from 'components/Loader'
import ErrorDisplay from 'components/ErrorDisplay'
import HubCard from 'components/HubCard'

const HubsContainer = () => {
  const { isLoading, isError, data, error } = useQuery('hubs', getAllHubs)

  if (isLoading) {
    return <Loader />
  }

  if (isError && error instanceof Error) {
    return <ErrorDisplay error={error} />
  }

  return (
    <Grid container spacing={2} mb={2}>
      {data?.map((hubData) => (
        <Grid item xs={12} sm={6} lg={4} key={hubData.uuid} display="flex">
          <HubCard hubData={hubData} />
        </Grid>
      ))}
    </Grid>
  )
}

export default HubsContainer
