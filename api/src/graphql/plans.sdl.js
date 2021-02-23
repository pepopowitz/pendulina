export const schema = gql`
  type Plan {
    id: Int!
    name: String!
    planWeeks: [PlanWeek]!
  }

  type Query {
    plans: [Plan!]!
  }

  input CreatePlanInput {
    name: String!
  }

  input UpdatePlanInput {
    name: String
  }
`
