import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlanWeekForm from 'src/components/Admin/PlanWeekForm'

const CREATE_PLAN_WEEK_MUTATION = gql`
  mutation CreatePlanWeekMutation($input: CreatePlanWeekInput!) {
    createPlanWeek(input: $input) {
      id
    }
  }
`

const NewPlanWeek = () => {
  const [createPlanWeek, { loading, error }] = useMutation(
    CREATE_PLAN_WEEK_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlanWeek created')
        navigate(routes.adminPlanWeeks())
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { planId: parseInt(input.planId) })
    createPlanWeek({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PlanWeek</h2>
      </header>
      <div className="rw-segment-main">
        <PlanWeekForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlanWeek
