import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PLAN_WORKOUT_MUTATION = gql`
  mutation DeletePlanWorkoutMutation($id: Int!) {
    deletePlanWorkout(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const PlanWorkout = ({ planWorkout }) => {
  const { addMessage } = useFlash()
  const [deletePlanWorkout] = useMutation(DELETE_PLAN_WORKOUT_MUTATION, {
    onCompleted: () => {
      navigate(routes.planWorkouts())
      addMessage('PlanWorkout deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planWorkout ' + id + '?')) {
      deletePlanWorkout({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlanWorkout {planWorkout.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{planWorkout.id}</td>
            </tr>
            <tr>
              <th>Day of week</th>
              <td>{planWorkout.dayOfWeek}</td>
            </tr>
            <tr>
              <th>Target miles</th>
              <td>{planWorkout.targetMiles}</td>
            </tr>
            <tr>
              <th>Target time (seconds)</th>
              <td>{planWorkout.targetTimeInSeconds}</td>
            </tr>
            <tr>
              <th>Target notes</th>
              <td>{planWorkout.targetNotes}</td>
            </tr>
            <tr>
              <th>Activity id</th>
              <td>{planWorkout.activityId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlanWorkout({ id: planWorkout.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(planWorkout.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default PlanWorkout
