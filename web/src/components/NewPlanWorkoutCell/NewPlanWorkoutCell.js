import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PlanWorkoutForm from 'src/components/PlanWorkoutForm'

export const QUERY = gql`
  query NEW_PLAN_WORKOUT_QUERY($planWeekID: Int!) {
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

const CREATE_PLAN_WORKOUT_MUTATION = gql`
  mutation CreatePlanWorkoutMutation($input: CreatePlanWorkoutInput!) {
    createPlanWorkout(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ activities, planWeek }) => {
  const { addMessage } = useFlash()
  const {
    plan: { id: planID },
  } = planWeek
  const [createPlanWorkout, { loading, error }] = useMutation(
    CREATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.editPlan({ id: planID }))
        addMessage('PlanWorkout created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      activityId: parseInt(input.activityId),
    })
    createPlanWorkout({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PlanWorkout</h2>
      </header>
      <div className="rw-segment-main">
        <PlanWorkoutForm
          activities={activities}
          onSave={onSave}
          loading={loading}
          error={error}
          planWeek={planWeek}
        />
      </div>
    </div>
  )
}
