// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Private, Router, Route } from '@redwoodjs/router'

import ActivitiesLayout from 'src/layouts/Admin/ActivitiesLayout'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import PlansLayout from 'src/layouts/Admin/PlansLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Set wrap={PlansLayout}>
          <Route path="/admin/plans/new" page={AdminNewPlanPage} name="adminNewPlan" />
          <Route path="/admin/plans/{id:Int}/edit" page={AdminEditPlanPage} name="adminEditPlan" />
          <Route path="/admin/plans/{id:Int}" page={AdminPlanPage} name="adminPlan" />
          <Route path="/admin/plans" page={AdminPlansPage} name="adminPlans" />
        </Set>
        <Set wrap={ActivitiesLayout}>
          <Route path="/admin/activities/new" page={AdminNewActivityPage} name="adminNewActivity" whileLoading={() => 'Loading...'} />
          <Route path="/admin/activities/{id:Int}/edit" page={AdminEditActivityPage} name="adminEditActivity" />
          <Route path="/admin/activities/{id:Int}" page={AdminActivityPage} name="adminActivity" />
          <Route path="/admin/activities" page={AdminActivitiesPage} name="adminActivities" whileLoading={() => 'Loading...'} />
        </Set>
        <Set wrap={GlobalLayout}>
          <Route path="/admin/" page={AdminAdminHomePage} name="adminHome" />
        </Set>
      </Private>
      <Private unauthenticated="home">
        <Route path="/plan/{id:Int}/manage" page={ManagePlanPage} name="managePlan" />
      </Private>
      <Route path="/my-plan" page={MyPlanPage} name="myPlan" />
      <Route path="/me" page={MePage} name="me" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
