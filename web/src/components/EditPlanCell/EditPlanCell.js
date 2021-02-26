import EditPlan from '../EditPlan'

export const QUERY = gql`
  query EditPlanQuery($id: Int!) {
    plan: plan(id: $id) {
      id
      name
      planWeeks {
        id
        weekNumber
        intention
        planWorkouts {
          id
          dayOfWeek
          activity {
            name
            icon
          }
          targetMiles
          targetTimeInMinutes
          targetNotes
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ plan }) => {
  return <EditPlan plan={plan}></EditPlan>
}
