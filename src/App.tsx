import { useEffect } from 'react'

import { getAllHubs } from 'api/hubsApi'

const App = () => {
  useEffect(() => {
    async function getHubs() {
      const hubs = await getAllHubs()
      console.log(hubs)
    }

    getHubs()
  }, [])

  return (
    <div>
      <h1 className="mt-4 text-center text-2xl">Hello, world!</h1>
    </div>
  )
}

export default App
