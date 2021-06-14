import PlanWeek from 'src/components/Admin/PlanWeek'

export const QUERY = gql`
  query FindPlanWeekById($id: Int!) {
    planWeek: planWeek(id: $id) {
      id
      weekNumber
      startDate
      intention
      planId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PlanWeek not found</div>

export const Success = ({ planWeek }) => {
  return <PlanWeek planWeek={planWeek} />
}
