// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route path="/admin/activities/new" page={NewActivityPage} name="newActivity" whileLoading={() => 'Loading...'} />
        <Route path="/admin/activities/{id:Int}/edit" page={EditActivityPage} name="editActivity" />
        <Route path="/admin/activities/{id:Int}" page={ActivityPage} name="activity" />
        <Route path="/admin/activities" page={ActivitiesPage} name="activities" whileLoading={() => 'Loading...'} />
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
