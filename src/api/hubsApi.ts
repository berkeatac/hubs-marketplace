import { HubsResponse } from 'types'

const BASE_API_URL = 'https://marketplace-demo.cleanhub.com/api/public'

const getAllHubs = async (): Promise<HubsResponse> => {
  const response = await fetch(`${BASE_API_URL}/hubs`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return await response.json()
}

export { getAllHubs }
