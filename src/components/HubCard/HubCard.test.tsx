import { render, screen } from '@testing-library/react'

import HubCard from './index'
import { mockSingleHubData } from 'mock'

describe('Card', () => {
  it('Shows card title', () => {
    render(<HubCard hubData={mockSingleHubData} />)
    expect(screen.getByText('Green Worms')).toBeDefined()
  })
})
