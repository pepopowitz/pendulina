import PlanWorkoutsLayout from 'src/layouts/PlanWorkoutsLayout'
import NewPlanWorkoutCell from 'src/components/NewPlanWorkoutCell'

const NewPlanWorkoutPage = ({ planWeekID }) => {
  return (
    <PlanWorkoutsLayout>
      <NewPlanWorkoutCell planWeekID={Number.parseInt(planWeekID)} />
    </PlanWorkoutsLayout>
  )
}

export default NewPlanWorkoutPage
