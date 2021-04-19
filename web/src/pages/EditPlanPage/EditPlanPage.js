import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import EditPlanCell from 'src/components/EditPlanCell'

const EditPlanPage = ({ id }) => {
  return (
    <GlobalLayout>
      <EditPlanCell id={id} />
    </GlobalLayout>
  )
}

export default EditPlanPage
