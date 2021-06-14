import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PlanWeeksLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminPlanWeeks()} className="rw-link">
            PlanWeeks
          </Link>
        </h1>
        <Link
          to={routes.adminNewPlanWeek()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New PlanWeek
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PlanWeeksLayout
