import PlanWorkoutsLayout from 'src/layouts/PlanWorkoutsLayout'
import PlanWorkoutCell from 'src/components/PlanWorkoutCell'

const PlanWorkoutPage = ({ id }) => {
  return (
    <PlanWorkoutsLayout>
      <PlanWorkoutCell id={id} />
    </PlanWorkoutsLayout>
  )
}

export default PlanWorkoutPage
