import type { FindWorkoutDetailQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { WorkoutDetail } from './WorkoutDetail'
import { Box, Flex, Text } from '@chakra-ui/react'

export const QUERY = gql`
  query FindWorkoutDetailQuery($id: Int!) {
    planWorkout: planWorkout(id: $id) {
      id
      dayOfWeek
      activity {
        name
        icon
      }
      isKeyWorkout
      status
      targetMiles
      targetTimeInMinutes
      targetNotes
      actualMiles
      actualTimeInMinutes
      actualNotes
      actualElevationInFeet
      actualMantras
      actualReflection
    }
  }
`

export const Loading = () => (
  <Wrapper bgColor="gray.200">
    <Flex p={1} mb={2} justifyContent="space-between">
      <Text size="md" as="h3" textAlign="center" fontWeight="bold">
        Workout Details
      </Text>
    </Flex>
  </Wrapper>
)

export const Empty = () => (
  <Wrapper>
    <Flex p={1} mb={2} justifyContent="space-between">
      <Text size="md" as="h3" textAlign="center" fontWeight="bold">
        Workout Details
      </Text>
    </Flex>
  </Wrapper>
)

export const Failure = ({ error }: CellFailureProps) => (
  <Wrapper>
    <Flex p={1} mb={2} justifyContent="space-between">
      <Text size="md" as="h3" textAlign="center" fontWeight="bold">
        Workout Details
      </Text>
      <div style={{ color: 'red' }}>Error: {error.message}</div>
    </Flex>
  </Wrapper>
)

export const Success = ({
  planWorkout,
}: CellSuccessProps<FindWorkoutDetailQuery>) => {
  return (
    <Wrapper>
      <WorkoutDetail planWorkout={planWorkout} />
    </Wrapper>
  )
}

function Wrapper({
  children,
  bgColor = 'gray.50',
}: {
  children?: JSX.Element
  bgColor?: string
}) {
  return (
    <Box p={2} bgColor={bgColor} boxShadow="sm" width="280px">
      {children}
    </Box>
  )
}
