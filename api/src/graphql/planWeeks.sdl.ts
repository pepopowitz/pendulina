export const schema = gql`
  type PlanWeek {
    id: Int!
    planWorkouts: [PlanWorkout]!
    weekNumber: Int!
    startDate: DateTime!
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
    startDate: DateTime!
    intention: String
    planId: Int
  }

  input UpdatePlanWeekInput {
    weekNumber: Int
    startDate: DateTime
    intention: String
    planId: Int
  }

  type Mutation {
    createPlanWeek(input: CreatePlanWeekInput!): PlanWeek!
    updatePlanWeek(id: Int!, input: UpdatePlanWeekInput!): PlanWeek!
    deletePlanWeek(id: Int!): PlanWeek!
  }
`
