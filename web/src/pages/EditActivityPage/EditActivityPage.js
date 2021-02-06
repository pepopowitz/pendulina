import ActivitiesLayout from 'src/layouts/ActivitiesLayout'
import EditActivityCell from 'src/components/EditActivityCell'

const EditActivityPage = ({ id }) => {
  return (
    <ActivitiesLayout>
      <EditActivityCell id={id} />
    </ActivitiesLayout>
  )
}

export default EditActivityPage
