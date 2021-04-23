import { Modal } from '@chakra-ui/react'
import { render } from '@redwoodjs/testing'
import { standard } from '../EditPlanWorkoutModalCell/EditPlanWorkoutModalCell.mock'

import { PlanWorkoutModalForm } from './PlanWorkoutModalForm'

describe('PlanWorkoutModalForm', () => {
  it('renders successfully', () => {
    const { planWeek, planWorkout } = standard()

    expect(() => {
      render(
        <Modal>
          <PlanWorkoutModalForm planWorkout={planWorkout} planWeek={planWeek} />
        </Modal>
      )
    }).not.toThrow()
  })
})
