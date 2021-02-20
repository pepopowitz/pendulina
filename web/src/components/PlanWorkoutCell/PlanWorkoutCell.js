import PlanWorkout from 'src/components/PlanWorkout'

export const QUERY = gql`
  query FIND_PLAN_WORKOUT_BY_ID($id: Int!) {
    planWorkout: planWorkout(id: $id) {
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

export const Empty = () => <div>PlanWorkout not found</div>

export const Success = ({ planWorkout }) => {
  return <PlanWorkout planWorkout={planWorkout} />
}
