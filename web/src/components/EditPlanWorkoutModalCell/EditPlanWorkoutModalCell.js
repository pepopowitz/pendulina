import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { PlanWorkoutModalForm } from '../PlanWorkoutModalForm'

export const QUERY = gql`
  query EditPlanWorkoutModalQuery($planWeekID: Int!, $id: Int!) {
    planWorkout: planWorkout(id: $id) {
      id
      dayOfWeek
      isKeyWorkout
      targetMiles
      targetTimeInMinutes
      targetNotes
      activityId
      status
      actualMiles
      actualTimeInMinutes
      actualElevationInFeet
      actualNotes
      actualMantras
      actualReflection
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
      activityId
      isKeyWorkout
      targetMiles
      targetTimeInMinutes
      targetNotes
      status
      actualMiles
      actualTimeInMinutes
      actualElevationInFeet
      actualNotes
      actualMantras
      actualReflection
    }
  }
`

const DELETE_PLAN_WORKOUT_MUTATION = gql`
  mutation DeletePlanWorkoutMutation($id: Int!) {
    deletePlanWorkout(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ planWorkout, activities, planWeek, onSaved }) => {
  const [updatePlanWorkout, { loading, error }] = useMutation(
    UPDATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Workout updated!')
        onSaved()
      },
    }
  )

  const [deletePlanWorkout] = useMutation(DELETE_PLAN_WORKOUT_MUTATION, {
    onCompleted: () => {
      toast.success('Workout deleted!')
      onSaved()
    },
  })

  const onSave = (input, id) => {
    updatePlanWorkout({ variables: { id, input } })
  }

  const onDelete = (id) => {
    deletePlanWorkout({ variables: { id } })
  }

  return (
    <PlanWorkoutModalForm
      activities={activities}
      planWeek={planWeek}
      planWorkout={planWorkout}
      onSave={onSave}
      onDelete={onDelete}
      loading={loading}
      error={error}
    />
  )
}
