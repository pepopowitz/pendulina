import { Button, Flex, Text } from '@chakra-ui/react'
import type { FindWorkoutDetailQuery } from 'types/graphql'

export const WorkoutDetail = function ({
  planWorkout,
}: {
  planWorkout: FindWorkoutDetailQuery['planWorkout']
}) {
  return (
    <>
      <Flex p={1} mb={2} justifyContent="space-between">
        <Text size="md" as="h3" textAlign="center" fontWeight="bold">
          Workout Details
        </Text>

        <Button size="xs" colorScheme="green" variant="outline" boxShadow="md">
          Edit{' '}
        </Button>
      </Flex>
      <Detail title="Status" content={planWorkout.status} bgColor="white" />
      <Detail title="Day" content={planWorkout.dayOfWeek} />
      <Detail
        title="Activity"
        content={planWorkout.activity.name}
        bgColor="white"
      />
      <Detail
        title="Distance"
        content={`${planWorkout.actualMiles} / ${[planWorkout.targetMiles]}`}
      />
      <Detail
        title="Duration"
        content={`${planWorkout.actualTimeInMinutes} / ${planWorkout.targetTimeInMinutes}`}
        bgColor="white"
      />
      <Detail
        title="Notes"
        content={`${planWorkout.actualNotes} / ${planWorkout.targetNotes}`}
      />
      <Detail
        title="Elevation"
        content={`${planWorkout.actualElevationInFeet}`}
        bgColor="white"
      />
      <Detail title="Mantras" content={`${planWorkout.actualMantras}`} />
      <Detail
        title="Reflection"
        content={`${planWorkout.actualReflection}`}
        bgColor="white"
      />
    </>
  )
}

function Detail({ title, content, bgColor = 'gray.50' }) {
  return (
    <Flex justifyContent="space-between" p={2} bgColor={bgColor}>
      <Text textAlign="left" fontSize="xs" fontWeight="bold">
        {title}
      </Text>
      <Text textAlign="right" fontSize="xs">
        {content}
      </Text>
    </Flex>
  )
}
