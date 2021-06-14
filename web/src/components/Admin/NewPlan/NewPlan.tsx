import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlanForm from 'src/components/Admin/PlanForm'

const CREATE_PLAN_MUTATION = gql`
  mutation CreatePlanMutation($input: CreatePlanInput!) {
    createPlan(input: $input) {
      id
    }
  }
`

const NewPlan = () => {
  const [createPlan, { loading, error }] = useMutation(CREATE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan created')
      navigate(routes.adminPlans())
    },
  })

  const onSave = (input) => {
    createPlan({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Plan</h2>
      </header>
      <div className="rw-segment-main">
        <PlanForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlan
