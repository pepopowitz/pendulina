import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { Link as RouterLink, routes } from '@redwoodjs/router'
import { useState } from 'react'

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

const workoutCardHeight = 100
const PlanWeeks = ({ planWeeks }) => {
  return planWeeks.map((planWeek) => {
    const planWeekDays = mapPlanWorkoutsToDays(planWeek.planWorkouts || [])

    /*
      heights:
      - 100px = card height
      - 116px = background for one card
        - 100 + 16
        - (100*ct) + (8 * (ct + 1))
    */
    const maxWorkoutsPerDay = Math.max(
      ...planWeekDays.map((day) => day.workouts.length)
    )
    const height =
      workoutCardHeight * maxWorkoutsPerDay + 8 * (maxWorkoutsPerDay + 1)
    const { startDateFormatted, endDateFormatted } = formatStartAndEndDates(
      planWeek
    )

    return (
      <Stack key={planWeek.id}>
        <Divider mt="3" mb="2" />
        <Flex direction="row" justifyContent="space-between">
          <HStack>
            <Heading fontSize="lg" as="h3" color="gray.500">
              Week {planWeek.weekNumber} ({startDateFormatted} -{' '}
              {endDateFormatted}):
            </Heading>
            <Heading fontSize="lg" as="h4">
              {planWeek.intention}
            </Heading>
          </HStack>
          <Link
            to={routes.newPlanWorkout({ planWeekID: planWeek.id })}
            as={RouterLink}
            color="green.600"
          >
            + Add a workout
          </Link>
        </Flex>
        <HStack spacing="2">
          {planWeekDays.map((planWeekDay) => (
            <PlanWeekDay
              planWeek={planWeek}
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

export const PlanWeekDay = ({ planWeek, planWeekDay, height }) => {
  return (
    <Box w="160px" h={height} bgColor="gray.100">
      {planWeekDay?.workouts.map((workout) => {
        return (
          <PlanWorkout
            planWeek={planWeek}
            workout={workout}
            key={`workout-${workout.id}`}
          />
        )
      })}
    </Box>
  )
}

const PlanWorkout = ({ planWeek, workout }) => {
  const [hovered, setHovered] = useState(false)
  const borderColor = hovered ? 'green.600' : 'gray.200'
  const ButtonWrapper = hovered ? React.Fragment : VisuallyHidden

  const constraints = []
  if (workout.targetMiles) {
    constraints.push(`${workout.targetMiles} miles`)
  }
  if (workout.targetTimeInMinutes) {
    constraints.push(`${workout.targetTimeInMinutes} minutes`)
  }

  return (
    <Stack
      borderWidth="1px"
      bgColor="white"
      m="2"
      p="2"
      h={`${workoutCardHeight}px`}
      spacing="1"
      borderColor={borderColor}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl">{workout.activity.icon}</Text>
        <ButtonWrapper>
          <Button
            size="xs"
            colorScheme="green"
            as={RouterLink}
            to={routes.editPlanWorkout({
              planWeekID: planWeek.id,
              id: workout.id,
            })}
          >
            Edit
          </Button>
        </ButtonWrapper>
      </Flex>
      <Stack spacing="0.5">
        <Text fontSize="sm" color="gray.600">
          {constraints.join(' | ')}
        </Text>
        <Text fontSize="xs" color="gray.900" isTruncated noOfLines="1">
          {workout.targetNotes}
        </Text>
      </Stack>
    </Stack>
  )
}

function formatStartAndEndDates(planWeek) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeZone: 'UTC',
  })
  const startDate = new Date(planWeek.startDate)
  const startDateFormatted = formatter.format(startDate)
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 6)
  const endDateFormatted = formatter.format(endDate)

  return { startDateFormatted, endDateFormatted }
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
