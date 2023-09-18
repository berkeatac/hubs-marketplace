import { render, screen } from '@testing-library/react'

import HubCard from './index'
import { mockData } from 'mock'

describe('Card', () => {
  it('Shows card title', () => {
    render(<HubCard hubData={mockData} />)
    expect(screen.getByText('Green Worms')).toBeDefined()
  })
})
