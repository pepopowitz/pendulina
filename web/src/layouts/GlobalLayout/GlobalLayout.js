import { Link, routes } from '@redwoodjs/router'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.me()}>Me</Link>
            </li>
            <li>
              <Link to={routes.plan()}>My Plan</Link>
            </li>
            <li>Pendulina</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
