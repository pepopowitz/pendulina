import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ActivityForm from 'src/components/ActivityForm'

export const QUERY = gql`
  query FIND_ACTIVITY_BY_ID($id: Int!) {
    activity: activity(id: $id) {
      id
      name
      icon
    }
  }
`
const UPDATE_ACTIVITY_MUTATION = gql`
  mutation UpdateActivityMutation($id: Int!, $input: UpdateActivityInput!) {
    updateActivity(id: $id, input: $input) {
      id
      name
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ activity }) => {
  const { addMessage } = useFlash()
  const [updateActivity, { loading, error }] = useMutation(
    UPDATE_ACTIVITY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminActivities())
        addMessage('Activity updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateActivity({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Activity {activity.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ActivityForm
          activity={activity}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
