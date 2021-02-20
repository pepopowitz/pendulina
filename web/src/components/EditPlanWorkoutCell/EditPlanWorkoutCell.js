import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PlanWorkoutForm from 'src/components/PlanWorkoutForm'

export const QUERY = gql`
  query EDIT_PLAN_WORKOUT_QUERY($id: Int!) {
    planWorkout: planWorkout(id: $id) {
      id
      dayOfWeek
      targetMiles
      targetTimeInSeconds
      targetNotes
      activityId
    }
    activities {
      id
      icon
      name
    }
  }
`
const UPDATE_PLAN_WORKOUT_MUTATION = gql`
  mutation UpdatePlanWorkoutMutation(
    $id: Int!
    $input: UpdatePlanWorkoutInput!
  ) {
    updatePlanWorkout(id: $id, input: $input) {
      id
      dayOfWeek
      targetMiles
      targetTimeInSeconds
      targetNotes
      activityId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ planWorkout, activities }) => {
  const { addMessage } = useFlash()
  const [updatePlanWorkout, { loading, error }] = useMutation(
    UPDATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.planWorkouts())
        addMessage('PlanWorkout updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      activityId: parseInt(input.activityId),
    })
    updatePlanWorkout({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlanWorkout {planWorkout.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlanWorkoutForm
          activities={activities}
          planWorkout={planWorkout}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
