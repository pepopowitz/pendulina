import Plan from 'src/components/Admin/Plan'

export const QUERY = gql`
  query FindPlanById($id: Int!) {
    plan: plan(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Plan not found</div>

export const Success = ({ plan }) => {
  return <Plan plan={plan} />
}
