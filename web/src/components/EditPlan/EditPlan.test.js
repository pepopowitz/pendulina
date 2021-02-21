import { render } from '@redwoodjs/testing'

import EditPlan from './EditPlan'

describe('EditPlan', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPlan />)
    }).not.toThrow()
  })
})
