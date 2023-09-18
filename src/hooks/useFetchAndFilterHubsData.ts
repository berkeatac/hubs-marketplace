import { getAllHubs } from 'api'
import { useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { Filters, Hub } from 'types'

const useFetchAndFilterHubsData = () => {
  const [filters, setFilters] = useState<Filters>({
    state: 'All',
    type: 'All',
    textSearch: ''
  })

  const filterByForm = useCallback(
    (hub: Hub) =>
      (filters.state !== 'All' ? hub.state === filters.state : true) &&
      (filters.type !== 'All' ? hub.type === filters.type : true) &&
      (filters.textSearch?.toLowerCase()
        ? hub.displayName.toLowerCase().includes(filters.textSearch) ||
          hub.cardDescription.toLowerCase().includes(filters.textSearch)
        : true),
    [filters]
  )

  const { isLoading, isError, data, error } = useQuery('hubs', getAllHubs, {
    staleTime: 1000 * 60 * 5
  })

  const filteredData = useMemo(
    () => data?.filter(filterByForm) || [],
    [data, filterByForm]
  )

  return { isLoading, isError, filteredData, error, filters, setFilters }
}

export default useFetchAndFilterHubsData
