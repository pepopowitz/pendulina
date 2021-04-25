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
    status: WorkoutStatus!
    actualMiles: String
    actualTimeInMinutes: String
    actualElevationInFeet: String
    actualNotes: String
    actualMantras: String
    actualReflection: String
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

  enum WorkoutStatus {
    UPCOMING
    COMPLETED
    MISSED
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
    targetNotes: String
    status: WorkoutStatus!
    actualMiles: String
    actualTimeInMinutes: String
    actualElevationInFeet: String
    actualNotes: String
    actualMantras: String
    actualReflection: String
  }

  input UpdatePlanWorkoutInput {
    planWeekId: Int!
    dayOfWeek: DayOfWeek
    activityId: Int
    isKeyWorkout: Boolean!
    targetMiles: String
    targetTimeInMinutes: String
    targetNotes: String
    status: WorkoutStatus!
    actualMiles: String
    actualTimeInMinutes: String
    actualElevationInFeet: String
    actualNotes: String
    actualMantras: String
    actualReflection: String
  }

  type Mutation {
    createPlanWorkout(input: CreatePlanWorkoutInput!): PlanWorkout!
    updatePlanWorkout(id: Int!, input: UpdatePlanWorkoutInput!): PlanWorkout!
    deletePlanWorkout(id: Int!): PlanWorkout!
  }
`
