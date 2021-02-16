import { Link, routes } from '@redwoodjs/router'

import PlanWorkouts from 'src/components/PlanWorkouts'

export const QUERY = gql`
  query PLAN_WORKOUTS_QUERY {
    planWorkouts {
      id
      dayOfWeek
      targetMiles
      targetTime
      targetNotes
      activity {
        id
        icon
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No planWorkouts yet. '}
      <Link to={routes.newPlanWorkout()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ planWorkouts }) => {
  return <PlanWorkouts planWorkouts={planWorkouts} />
}
