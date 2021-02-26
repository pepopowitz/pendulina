import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'

const daysOfWeek = ['M', 'T', 'W', 'R', 'F', 'S', 'S']

const EditPlan = ({ plan }) => {
  if (!plan) {
    return null
  }

  return (
    <Container maxW="container.xl" centerContent>
      <Stack>
        <Box textAlign="center">
          <Heading>{plan.name}</Heading>
        </Box>
        <Divider my="5" />
        <HStack spacing="2">
          {daysOfWeek.map((dayOfWeek, index) => {
            return (
              <Box w="160px" p="4" bg="green.800" key={`dow-${index}`}>
                <Text fontSize="md" color="white" textAlign="center">
                  {dayOfWeek}
                </Text>
              </Box>
            )
          })}
        </HStack>
        <Stack>
          <PlanWeeks planWeeks={plan.planWeeks} />
        </Stack>
      </Stack>
    </Container>
  )
}

const PlanWeeks = ({ planWeeks }) => {
  return planWeeks.map((planWeek) => {
    const planWeekDays = mapPlanWorkoutsToDays(planWeek.planWorkouts || [])

    /*
      heights:
      - 90px = card height
      - 106px = background for one card
        - 90 + 16
      - 106px = background for one card plu
        - (90*ct) + (8 * (ct + 1))
    */
    const maxWorkoutsPerDay = Math.max(
      ...planWeekDays.map((day) => day.workouts.length)
    )
    const height = 90 * maxWorkoutsPerDay + 8 * (maxWorkoutsPerDay + 1)

    return (
      <Stack key={planWeek.id}>
        <Divider mt="3" mb="2" />
        <HStack>
          <Heading fontSize="lg" as="h3" color="gray.500">
            Week {planWeek.weekNumber}:
          </Heading>
          <Heading fontSize="lg" as="h4">
            {planWeek.intention}
          </Heading>
        </HStack>
        <HStack spacing="2">
          {planWeekDays.map((planWeekDay) => (
            <PlanWeekDay
              planWeekDay={planWeekDay}
              height={`${height}px`}
              key={`${planWeek.id}|${planWeekDay.dayOfWeek}`}
            />
          ))}
        </HStack>
      </Stack>
    )
  })
}

const PlanWeekDay = ({ planWeekDay, height }) => {
  return (
    <Box w="160px" h={height} bgColor="gray.100">
      {planWeekDay?.workouts.map((workout) => {
        return <PlanWorkout workout={workout} key={`workout-${workout.id}`} />
      })}
    </Box>
  )
}

const PlanWorkout = ({ workout }) => {
  const constraints = []
  if (workout.targetMiles) {
    constraints.push(`${workout.targetMiles} miles`)
  }
  if (workout.targetTimeInMinutes) {
    constraints.push(`${workout.targetTimeInMinutes} minutes`)
  }

  return (
    <Stack borderWidth="1px" bgColor="white" m="2" p="2" h="90px">
      <Flex direction="row" justifyContent="space-between">
        <Text fontSize="2xl">{workout.activity.icon}</Text>
        <Stack>
          <Text fontSize="m" color="gray.600" textAlign="right">
            {constraints.join(' | ')}
          </Text>
          <Text
            fontSize="xs"
            color="gray.900"
            isTruncated
            noOfLines="2"
            textAlign="right"
          >
            {workout.targetNotes}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  )
}

export function mapPlanWorkoutsToDays(planWorkouts) {
  const days = {
    MONDAY: { dayOfWeek: 'MONDAY', workouts: [] },
    TUESDAY: { dayOfWeek: 'TUESDAY', workouts: [] },
    WEDNESDAY: { dayOfWeek: 'WEDNESDAY', workouts: [] },
    THURSDAY: { dayOfWeek: 'THURSDAY', workouts: [] },
    FRIDAY: { dayOfWeek: 'FRIDAY', workouts: [] },
    SATURDAY: { dayOfWeek: 'SATURDAY', workouts: [] },
    SUNDAY: { dayOfWeek: 'SUNDAY', workouts: [] },
  }

  const daysWithWorkoutsAsObject = planWorkouts.reduce((daysSoFar, curr) => {
    const day = daysSoFar[curr.dayOfWeek]
    const y = {
      ...daysSoFar,
      [day.dayOfWeek]: {
        ...day,
        workouts: [...day.workouts, curr],
      },
    }
    return y
  }, days)

  return Object.keys(daysWithWorkoutsAsObject).map((key) => {
    return daysWithWorkoutsAsObject[key]
  })
}

export default EditPlan
