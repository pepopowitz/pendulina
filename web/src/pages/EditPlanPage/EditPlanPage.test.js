import { render } from '@redwoodjs/testing'

import EditPlanPage from './EditPlanPage'

describe('EditPlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPlanPage />)
    }).not.toThrow()
  })
})
