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
      <Private>
        <Route path="/admin/activities/new" page={NewActivityPage} name="newActivity" whileLoading={() => 'Loading...'} />
        <Route path="/admin/activities/{id:Int}/edit" page={EditActivityPage} name="editActivity" />
        <Route path="/admin/activities/{id:Int}" page={ActivityPage} name="activity" />
        <Route path="/admin/activities" page={ActivitiesPage} name="activities" whileLoading={() => 'Loading...'} />
        <Route path="/admin/plan-weeks/{planWeekID:Int}/plan-workouts/new" page={NewPlanWorkoutPage} name="newPlanWorkout" />
        <Route path="/admin/plan-workouts/{id:Int}/edit" page={EditPlanWorkoutPage} name="editPlanWorkout" />
        <Route path="/admin/plan-workouts/{id:Int}" page={PlanWorkoutPage} name="planWorkout" />
        <Route path="/admin/plan-workouts" page={PlanWorkoutsPage} name="planWorkouts" />
        <Route path="/admin/plan/{id:Int}/edit" page={EditPlanPage} name="editPlan" />
      </Private>
      {/* I'd like to wrap some of these routes in Private but when I do the pages don't render */}
      {/* <Private unauthenticated="">
      </Private> */}
      <Route path="/my-plan" page={MyPlanPage} name="myPlan" />
      <Route path="/me" page={MePage} name="me" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
