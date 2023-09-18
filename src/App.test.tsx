import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Shows title', () => {
    render(<App />)
    expect(screen.getByText('Hub List')).toBeDefined()
  })
})
