import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlanWeekForm from 'src/components/Admin/PlanWeekForm'

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
const UPDATE_PLAN_WEEK_MUTATION = gql`
  mutation UpdatePlanWeekMutation($id: Int!, $input: UpdatePlanWeekInput!) {
    updatePlanWeek(id: $id, input: $input) {
      id
      weekNumber
      startDate
      intention
      planId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ planWeek }) => {
  const [updatePlanWeek, { loading, error }] = useMutation(
    UPDATE_PLAN_WEEK_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanWeek updated')
        navigate(routes.adminPlanWeeks())
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { planId: parseInt(input.planId) })
    updatePlanWeek({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlanWeek {planWeek.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlanWeekForm
          planWeek={planWeek}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
