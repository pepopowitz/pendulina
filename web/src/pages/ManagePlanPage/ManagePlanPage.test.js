import { render } from '@redwoodjs/testing'

import ManagePlanPage from './ManagePlanPage'

describe('ManagePlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManagePlanPage />)
    }).not.toThrow()
  })
})
