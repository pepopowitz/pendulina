import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ActivitiesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminActivities()} className="rw-link">
            Activities
          </Link>
        </h1>
        <Link
          to={routes.adminNewActivity()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Activity
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ActivitiesLayout
