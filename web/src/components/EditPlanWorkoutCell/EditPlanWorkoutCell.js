import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PlanWorkoutForm from 'src/components/PlanWorkoutForm'

export const QUERY = gql`
  query EDIT_PLAN_WORKOUT_QUERY($planWeekID: Int!, $id: Int!) {
    planWorkout: planWorkout(id: $id) {
      id
      dayOfWeek
      targetMiles
      targetTimeInMinutes
      targetNotes
      activityId
    }
    activities {
      id
      icon
      name
    }
    planWeek(id: $planWeekID) {
      id
      weekNumber
      intention
      plan {
        id
      }
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
      targetTimeInMinutes
      targetNotes
      activityId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ planWeek, planWorkout, activities }) => {
  const { addMessage } = useFlash()
  const {
    plan: { id: planID },
  } = planWeek
  const [updatePlanWorkout, { loading, error }] = useMutation(
    UPDATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.editPlan({ id: planID }))
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
          planWeek={planWeek}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
