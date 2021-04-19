import { render } from '@redwoodjs/testing'

import PlanWorkoutModalForm from './PlanWorkoutModalForm'

describe('PlanWorkoutModalForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanWorkoutModalForm />)
    }).not.toThrow()
  })
})
