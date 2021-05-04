import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { PlanWorkoutModalForm } from '../PlanWorkoutModalForm'

export const QUERY = gql`
  query NewPlanWorkoutModalQuery($planWeekID: Int!) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ activities, planWeek, onSaved }) => {
  const [createPlanWorkout, { loading, error }] = useMutation(
    CREATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Workout created!')
        onSaved()
      },
    }
  )

  const onSave = (input) => {
    createPlanWorkout({ variables: { input } })
  }

  // todo: move this into EditPlan, & control things from there
  //   so that loading in this component appears in the modal.
  return (
    <PlanWorkoutModalForm
      activities={activities}
      planWeek={planWeek}
      onSave={onSave}
      loading={loading}
      error={error}
    />
  )
}
