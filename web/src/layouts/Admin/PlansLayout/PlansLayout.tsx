import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PlansLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminPlans()} className="rw-link">
            Plans
          </Link>
        </h1>
        <Link to={routes.adminNewPlan()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Plan
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PlansLayout
