export const schema = gql`
  type PlanWeek {
    id: Int!
    planWorkouts: [PlanWorkout]!
    weekNumber: Int!
    intention: String
    plan: Plan
    planId: Int
  }

  type Query {
    planWeeks: [PlanWeek!]!
    planWeek(id: Int!): PlanWeek
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
