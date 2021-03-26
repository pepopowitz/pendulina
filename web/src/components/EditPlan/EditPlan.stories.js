import { HStack } from '@chakra-ui/react'
import StorybookLayout from 'src/layouts/StorybookLayout/StorybookLayout'
import EditPlan, { PlanWeekDay } from './EditPlan'
import { standard } from '../EditPlanCell/EditPlanCell.mock'

export const generated = () => {
  return (
    <StorybookLayout>
      <EditPlan plan={standard().plan} />
    </StorybookLayout>
  )
}

export const planWeekDay = () => {
  const planWeekDay = {
    workouts: [standard().plan.planWeeks[0].planWorkouts[0]],
  }
  return (
    <StorybookLayout>
      <HStack spacing="2">
        <PlanWeekDay planWeekDay={planWeekDay} height={106} />
      </HStack>
    </StorybookLayout>
  )
}

export default { title: 'Components/EditPlan' }
