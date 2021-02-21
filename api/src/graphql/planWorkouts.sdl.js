export const schema = gql`
  type PlanWorkout {
    id: Int!
    dayOfWeek: DayOfWeek!
    activity: Activity!
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String!
    activityId: Int!
  }

  enum DayOfWeek {
    SUNDAY
    MONDAY
    TUESDAY
    WEDNESDAY
    THURSDAY
    FRIDAY
    SATURDAY
  }

  type Query {
    planWorkouts: [PlanWorkout!]!
    planWorkout(id: Int!): PlanWorkout
  }

  input CreatePlanWorkoutInput {
    dayOfWeek: DayOfWeek!
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String!
    activityId: Int!
  }

  input UpdatePlanWorkoutInput {
    dayOfWeek: DayOfWeek
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String
    activityId: Int
  }

  type Mutation {
    createPlanWorkout(input: CreatePlanWorkoutInput!): PlanWorkout!
    updatePlanWorkout(id: Int!, input: UpdatePlanWorkoutInput!): PlanWorkout!
    deletePlanWorkout(id: Int!): PlanWorkout!
  }
`
