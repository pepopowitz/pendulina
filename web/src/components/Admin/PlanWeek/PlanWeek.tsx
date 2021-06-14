import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/PlanWeeksCell'

const DELETE_PLAN_WEEK_MUTATION = gql`
  mutation DeletePlanWeekMutation($id: Int!) {
    deletePlanWeek(id: $id) {
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

const PlanWeek = ({ planWeek }) => {
  const [deletePlanWeek] = useMutation(DELETE_PLAN_WEEK_MUTATION, {
    onCompleted: () => {
      toast.success('PlanWeek deleted')
      navigate(routes.adminPlanWeeks())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planWeek ' + id + '?')) {
      deletePlanWeek({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlanWeek {planWeek.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{planWeek.id}</td>
            </tr>
            <tr>
              <th>Week number</th>
              <td>{planWeek.weekNumber}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(planWeek.startDate)}</td>
            </tr>
            <tr>
              <th>Intention</th>
              <td>{planWeek.intention}</td>
            </tr>
            <tr>
              <th>Plan id</th>
              <td>{planWeek.planId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditPlanWeek({ id: planWeek.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(planWeek.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default PlanWeek
