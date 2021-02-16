import PlanWorkoutsLayout from 'src/layouts/PlanWorkoutsLayout'
import EditPlanWorkoutCell from 'src/components/EditPlanWorkoutCell'

const EditPlanWorkoutPage = ({ id }) => {
  return (
    <PlanWorkoutsLayout>
      <EditPlanWorkoutCell id={id} />
    </PlanWorkoutsLayout>
  )
}

export default EditPlanWorkoutPage
