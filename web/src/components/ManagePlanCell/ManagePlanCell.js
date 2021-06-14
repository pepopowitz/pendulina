import ManagePlan from '../ManagePlan'
import { ManagePlanContextProvider } from './ManagePlanContext'

export const QUERY = gql`
  query ManagePlanQuery($id: Int!) {
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
    <ManagePlanContextProvider refetch={refetch}>
      <ManagePlan plan={plan} />
    </ManagePlanContextProvider>
  )
}
