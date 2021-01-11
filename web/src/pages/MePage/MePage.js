import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const MePage = () => {
  return (
    <GlobalLayout>
      <h1>MePage</h1>
      <p>
        Find me in <code>./web/src/pages/MePage/MePage.js</code>
      </p>
      <p>
        My default route is named <code>me</code>, link to me with `
        <Link to={routes.me()}>Me</Link>`
      </p>
    </GlobalLayout>
  )
}

export default MePage
