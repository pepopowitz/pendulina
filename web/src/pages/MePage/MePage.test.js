import { render } from '@redwoodjs/testing'

import MePage from './MePage'

describe('MePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MePage />)
    }).not.toThrow()
  })
})
