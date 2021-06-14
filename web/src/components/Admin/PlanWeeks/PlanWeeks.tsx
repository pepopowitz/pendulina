import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/PlanWeeksCell'

const DELETE_PLAN_WEEK_MUTATION = gql`
  mutation DeletePlanWeekMutation($id: Int!) {
    deletePlanWeek(id: $id) {
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

const PlanWeeksList = ({ planWeeks }) => {
  const [deletePlanWeek] = useMutation(DELETE_PLAN_WEEK_MUTATION, {
    onCompleted: () => {
      toast.success('PlanWeek deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planWeek ' + id + '?')) {
      deletePlanWeek({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Week number</th>
            <th>Start date</th>
            <th>Intention</th>
            <th>Plan id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {planWeeks.map((planWeek) => (
            <tr key={planWeek.id}>
              <td>{truncate(planWeek.id)}</td>
              <td>{truncate(planWeek.weekNumber)}</td>
              <td>{timeTag(planWeek.startDate)}</td>
              <td>{truncate(planWeek.intention)}</td>
              <td>{truncate(planWeek.planId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminPlanWeek({ id: planWeek.id })}
                    title={'Show planWeek ' + planWeek.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditPlanWeek({ id: planWeek.id })}
                    title={'Edit planWeek ' + planWeek.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete planWeek ' + planWeek.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(planWeek.id)}
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

export default PlanWeeksList
