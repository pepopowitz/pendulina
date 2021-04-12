export const schema = gql`
  type PlanWorkout {
    id: Int!
    planWeek: PlanWeek!
    dayOfWeek: DayOfWeek!
    activityId: Int!
    activity: Activity!
    isKeyWorkout: Boolean!
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String!
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
    activityId: Int!
    planWeekId: Int!
    dayOfWeek: DayOfWeek!
    isKeyWorkout: Boolean!
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String!
  }

  input UpdatePlanWorkoutInput {
    dayOfWeek: DayOfWeek
    isKeyWorkout: Boolean!
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String
    activityId: Int
    planWeekId: Int!
  }

  # TODO: remove this once the entire form is converted!!!!
  input UpdatePlanWorkoutInput2 {
    planWeekId: Int!
    dayOfWeek: DayOfWeek
    activityId: Int
    isKeyWorkout: Boolean!
    targetMiles: String
    targetTimeInMinutes: String
  }

  type Mutation {
    createPlanWorkout(input: CreatePlanWorkoutInput!): PlanWorkout!
    updatePlanWorkout(id: Int!, input: UpdatePlanWorkoutInput!): PlanWorkout!
    # TODO: remove this once the entire form is converted!!!!
    updatePlanWorkout2(id: Int!, input: UpdatePlanWorkoutInput2!): PlanWorkout!
    deletePlanWorkout(id: Int!): PlanWorkout!
  }
`
