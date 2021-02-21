import { render } from '@redwoodjs/testing'

import MyPlanPage from './MyPlanPage'

describe('MyPlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyPlanPage />)
    }).not.toThrow()
  })
})
