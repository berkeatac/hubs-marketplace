import Grid from '@mui/material/Grid'

import Loader from 'components/Loader'
import ErrorDisplay from 'components/ErrorDisplay'
import HubCard from 'components/HubCard'
import HubsFilters from 'components/HubsFilters'

import useFetchAndFilterHubsData from 'hooks/useFetchAndFilterHubsData'

const HubsContainer = () => {
  const { isLoading, isError, filteredData, error, filters, setFilters } =
    useFetchAndFilterHubsData()

  if (isLoading) {
    return <Loader />
  }

  if (isError && error instanceof Error) {
    return <ErrorDisplay error={error} />
  }

  return (
    <Grid container spacing={2} mb={2}>
      <Grid item xs={12}>
        <HubsFilters filters={filters} setFilters={setFilters} />
      </Grid>
      {filteredData.length > 0 ? (
        filteredData.map((hubData) => (
          <HubCard hubData={hubData} key={hubData.uuid} />
        ))
      ) : (
        <Grid item xs={12}>
          No hubs are found
        </Grid>
      )}
    </Grid>
  )
}

export default HubsContainer
