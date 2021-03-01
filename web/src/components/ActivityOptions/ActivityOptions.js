export const ActivityOptions = ({ activities }) => {
  return activities.map((activity) => {
    return (
      <option value={activity.id} key={`activity:${activity.id}`}>
        {activity.icon} {activity.name}
      </option>
    )
  })
}
