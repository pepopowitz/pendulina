import ActivitiesLayout from 'src/layouts/ActivitiesLayout'
import ActivityCell from 'src/components/ActivityCell'

const ActivityPage = ({ id }) => {
  return (
    <ActivitiesLayout>
      <ActivityCell id={id} />
    </ActivitiesLayout>
  )
}

export default ActivityPage
