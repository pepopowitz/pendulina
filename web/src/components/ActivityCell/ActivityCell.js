import Activity from 'src/components/Activity'

export const QUERY = gql`
  query FIND_ACTIVITY_BY_ID($id: Int!) {
    activity: activity(id: $id) {
      id
      name
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Activity not found</div>

export const Success = ({ activity }) => {
  return <Activity activity={activity} />
}
