export const schema = gql`
  type Activity {
    id: Int!
    name: String!
    icon: String!
  }

  type Query {
    activities: [Activity!]!
    activity(id: Int!): Activity
  }

  input CreateActivityInput {
    name: String!
    icon: String!
  }

  input UpdateActivityInput {
    name: String
    icon: String
  }

  type Mutation {
    createActivity(input: CreateActivityInput!): Activity!
    updateActivity(id: Int!, input: UpdateActivityInput!): Activity!
    deleteActivity(id: Int!): Activity!
  }
`
