import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import ManagePlanCell from 'src/components/ManagePlanCell'

const ManagePlanPage = ({ id }) => {
  return (
    <GlobalLayout>
      <ManagePlanCell id={id} />
    </GlobalLayout>
  )
}

export default ManagePlanPage
