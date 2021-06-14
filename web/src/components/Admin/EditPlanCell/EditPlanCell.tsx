import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlanForm from 'src/components/Admin/PlanForm'

export const QUERY = gql`
  query FindPlanById($id: Int!) {
    plan: plan(id: $id) {
      id
      name
    }
  }
`
const UPDATE_PLAN_MUTATION = gql`
  mutation UpdatePlanMutation($id: Int!, $input: UpdatePlanInput!) {
    updatePlan(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ plan }) => {
  const [updatePlan, { loading, error }] = useMutation(UPDATE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan updated')
      navigate(routes.adminPlans())
    },
  })

  const onSave = (input, id) => {
    updatePlan({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Plan {plan.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PlanForm plan={plan} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
