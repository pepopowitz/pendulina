import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const PlanPage = () => {
  return (
    <GlobalLayout>
      <h1>PlanPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlanPage/PlanPage.js</code>
      </p>
      <p>
        My default route is named <code>plan</code>, link to me with `
        <Link to={routes.plan()}>Plan</Link>`
      </p>
    </GlobalLayout>
  )
}

export default PlanPage
