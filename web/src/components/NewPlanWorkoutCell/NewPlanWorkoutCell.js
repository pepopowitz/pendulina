import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PlanWorkoutForm from 'src/components/PlanWorkoutForm'

export const QUERY = gql`
  query NEW_PLAN_WORKOUT_QUERY {
    activities {
      id
      icon
      name
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

export const Success = ({ activities }) => {
  const { addMessage } = useFlash()
  const [createPlanWorkout, { loading, error }] = useMutation(
    CREATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.planWorkouts())
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
        />
      </div>
    </div>
  )
}
