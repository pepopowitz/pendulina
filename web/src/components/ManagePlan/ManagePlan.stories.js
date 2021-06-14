import { HStack } from '@chakra-ui/react'
import StorybookLayout from 'src/layouts/StorybookLayout/StorybookLayout'
import ManagePlan, { PlanWeekDay } from './ManagePlan'
import { standard } from '../ManagePlanCell/ManagePlanCell.mock'

export const generated = () => {
  return (
    <StorybookLayout>
      <ManagePlan plan={standard().plan} />
    </StorybookLayout>
  )
}

export const planWeekDay = () => {
  const plan = standard().plan
  const planWeekDay = {
    workouts: [plan.planWeeks[0].planWorkouts[0]],
  }
  const planWeek = plan.planWeeks[0]
  return (
    <StorybookLayout>
      <HStack spacing="2">
        <PlanWeekDay
          planWeek={planWeek}
          planWeekDay={planWeekDay}
          height={106}
        />
      </HStack>
    </StorybookLayout>
  )
}

export default { title: 'Components/ManagePlan' }
