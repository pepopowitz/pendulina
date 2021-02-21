import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const MyPlanPage = () => {
  return (
    <GlobalLayout>
      <h1>MyPlanPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyPlanPage/MyPlanPage.js</code>
      </p>
      <p>
        My default route is named <code>myPlan</code>, link to me with `
        <Link to={routes.myPlan()}>My Plan</Link>`
      </p>
    </GlobalLayout>
  )
}

export default MyPlanPage
