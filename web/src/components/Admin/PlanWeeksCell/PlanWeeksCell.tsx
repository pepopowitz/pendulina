import { Link, routes } from '@redwoodjs/router'

import PlanWeeks from 'src/components/Admin/PlanWeeks'

export const QUERY = gql`
  query PLAN_WEEKS {
    planWeeks {
      id
      weekNumber
      startDate
      intention
      planId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No planWeeks yet. '}
      <Link to={routes.adminNewPlanWeek()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ planWeeks }) => {
  return <PlanWeeks planWeeks={planWeeks} />
}
