import { render } from '@redwoodjs/testing'

import PlanPage from './PlanPage'

describe('PlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanPage />)
    }).not.toThrow()
  })
})
