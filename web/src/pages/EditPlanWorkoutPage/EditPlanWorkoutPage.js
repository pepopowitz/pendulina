import PlanWorkoutsLayout from 'src/layouts/PlanWorkoutsLayout'
import EditPlanWorkoutCell from 'src/components/EditPlanWorkoutCell'

const EditPlanWorkoutPage = ({ id, planWeekID }) => {
  return (
    <PlanWorkoutsLayout>
      <EditPlanWorkoutCell id={id} planWeekID={Number.parseInt(planWeekID)} />
    </PlanWorkoutsLayout>
  )
}

export default EditPlanWorkoutPage
