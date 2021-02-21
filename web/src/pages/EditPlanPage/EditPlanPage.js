import { Link, routes } from '@redwoodjs/router'

const EditPlanPage = () => {
  return (
    <>
      <h1>EditPlanPage</h1>
      <p>
        Find me in <code>./web/src/pages/EditPlanPage/EditPlanPage.js</code>
      </p>
      <p>
        My default route is named <code>editPlan</code>, link to me with `
        <Link to={routes.editPlan()}>EditPlan</Link>`
      </p>
    </>
  )
}

export default EditPlanPage
