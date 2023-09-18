import { useState, useCallback } from 'react'
import { useQuery } from 'react-query'
import Grid from '@mui/material/Grid'

import { getAllHubs } from 'api/hubsApi'
import Loader from 'components/Loader'
import ErrorDisplay from 'components/ErrorDisplay'
import HubCard from 'components/HubCard'
import HubsFilters from 'components/HubsFilters'

import { Filters, Hub } from 'types'

const HubsContainer = () => {
  const [filters, setFilters] = useState<Filters>({
    state: 'All',
    type: 'All',
    textSearch: ''
  })

  const filterByForm = useCallback(
    (hub: Hub) =>
      (filters.state !== 'All' ? hub.state === filters.state : true) &&
      (filters.type !== 'All' ? hub.type === filters.type : true) &&
      (filters.textSearch
        ? hub.displayName.includes(filters.textSearch)
        : true),
    [filters]
  )

  const { isLoading, isError, data, error } = useQuery('hubs', getAllHubs, {
    staleTime: 1000 * 60 * 5
  })

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
      {data
        ?.filter(filterByForm)
        .map((hubData) => <HubCard hubData={hubData} key={hubData.uuid} />)}
    </Grid>
  )
}

export default HubsContainer
