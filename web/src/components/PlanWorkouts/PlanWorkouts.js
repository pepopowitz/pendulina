import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PlanWorkoutsCell'

const DELETE_PLAN_WORKOUT_MUTATION = gql`
  mutation DeletePlanWorkoutMutation($id: Int!) {
    deletePlanWorkout(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const PlanWorkoutsList = ({ activities, planWorkouts }) => {
  const { addMessage } = useFlash()
  const [deletePlanWorkout] = useMutation(DELETE_PLAN_WORKOUT_MUTATION, {
    onCompleted: () => {
      addMessage('PlanWorkout deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planWorkout ' + id + '?')) {
      deletePlanWorkout({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Day of week</th>
            <th>Target miles</th>
            <th>Target time (seconds)</th>
            <th>Target notes</th>
            <th>Activity</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {planWorkouts.map((planWorkout) => (
            <tr key={planWorkout.id}>
              <td>{truncate(planWorkout.id)}</td>
              <td>{truncate(planWorkout.dayOfWeek)}</td>
              <td>{truncate(planWorkout.targetMiles)}</td>
              <td>{truncate(planWorkout.targetTimeInSeconds)}</td>
              <td>{truncate(planWorkout.targetNotes)}</td>
              <td>
                {truncate(
                  `${planWorkout.activity.icon} ${planWorkout.activity.name}`
                )}
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.planWorkout({ id: planWorkout.id })}
                    title={'Show planWorkout ' + planWorkout.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlanWorkout({ id: planWorkout.id })}
                    title={'Edit planWorkout ' + planWorkout.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete planWorkout ' + planWorkout.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(planWorkout.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlanWorkoutsList
