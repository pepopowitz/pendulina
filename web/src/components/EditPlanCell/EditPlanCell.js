import EditPlan from '../EditPlan'
import { EditPlanContextProvider } from './EditPlanContext'

export const QUERY = gql`
  query EditPlanQuery($id: Int!) {
    plan: plan(id: $id) {
      id
      name
      planWeeks {
        id
        weekNumber
        startDate
        intention
        planWorkouts {
          id
          dayOfWeek
          activity {
            name
            icon
          }
          isKeyWorkout
          status
          targetMiles
          targetTimeInMinutes
          targetNotes
          actualMiles
          actualTimeInMinutes
          actualNotes
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ plan, refetch }) => {
  return (
    <EditPlanContextProvider refetch={refetch}>
      <EditPlan plan={plan} />
    </EditPlanContextProvider>
  )
}
