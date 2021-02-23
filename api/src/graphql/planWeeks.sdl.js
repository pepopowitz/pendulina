export const schema = gql`
  type PlanWeek {
    id: Int!
    planWorkouts: [PlanWorkout]!
    weekNumber: Int!
    intention: String
    Plan: Plan
    planId: Int
  }

  type Query {
    planWeeks: [PlanWeek!]!
  }

  input CreatePlanWeekInput {
    weekNumber: Int!
    intention: String
    planId: Int
  }

  input UpdatePlanWeekInput {
    weekNumber: Int
    intention: String
    planId: Int
  }
`
