import { render } from '@redwoodjs/testing'

import AdminHomePage from './AdminHomePage'

describe('AdminHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHomePage />)
    }).not.toThrow()
  })
})
