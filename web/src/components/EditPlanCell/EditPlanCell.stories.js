import StorybookLayout from 'src/layouts/StorybookLayout/StorybookLayout'
import { Loading, Empty, Failure, Success } from './EditPlanCell'
import { standard } from './EditPlanCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? (
    <StorybookLayout>
      <Success {...standard()} />
    </StorybookLayout>
  ) : null
}

export default { title: 'Cells/EditPlanCell' }
