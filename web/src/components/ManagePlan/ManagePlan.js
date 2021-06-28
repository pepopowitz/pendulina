import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useManagePlanContext } from '../ManagePlanCell/ManagePlanContext'
import EditPlanWorkoutModalCell from '../EditPlanWorkoutModalCell'
import NewPlanWorkoutModalCell from '../NewPlanWorkoutModalCell'
import { PlanWorkoutModal } from '../PlanWorkoutModal'
import { Workout } from '../Workout'

const daysOfWeek = ['M', 'T', 'W', 'R', 'F', 'Sa', 'Su']

const ManagePlan = ({ plan }) => {
  if (!plan) {
    return null
  }

  return (
    <Container maxW="container.xl" centerContent>
      <Stack>
        <Box textAlign="center" my={5}>
          <Heading>{plan.name}</Heading>
        </Box>
        <Divider my="5" />
        <HStack spacing="2">
          {daysOfWeek.map((dayOfWeek, index) => {
            return (
              <Box w="120px" p="4" bg="green.800" key={`dow-${index}`}>
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

const workoutCardHeight = 114
const PlanWeeks = ({ planWeeks }) => {
  const { refetch } = useManagePlanContext()

  return planWeeks.map((planWeek) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const planWeekDays = mapPlanWeekToDays(planWeek)

    /*
      heights:
      - 18px = date
        - 8px for margin-bottom
      - 114px = card height
      - 130px = background for one card
        - 114 + 16
        - (114*ct) + (8 * (ct + 1))
    */
    const maxWorkoutsPerDay = Math.max(
      ...planWeekDays.map((day) => day.workouts.length)
    )
    const height =
      workoutCardHeight * maxWorkoutsPerDay + 26 + 8 * (maxWorkoutsPerDay + 1)
    const { startDateFormatted, endDateFormatted } =
      formatStartAndEndDates(planWeek)

    return (
      <React.Fragment key={planWeek.id}>
        <Stack>
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
            <Button size="xs" colorScheme="green" onClick={onOpen}>
              Add workout
            </Button>
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
        <PlanWorkoutModal title="Add Workout" isOpen={isOpen} onClose={onClose}>
          <NewPlanWorkoutModalCell
            planWeekID={planWeek.id}
            onSaved={() => {
              onClose()
              refetch()
            }}
          />
        </PlanWorkoutModal>
      </React.Fragment>
    )
  })
}

export const PlanWeekDay = ({ planWeek, planWeekDay, height }) => {
  return (
    <Box w="120px" h={height} bgColor="gray.50" p={1} boxShadow="sm">
      <Stack spacing={2}>
        <Text color="gray.600" fontSize="xs">
          {planWeekDay.date.getDate()}
        </Text>
        {planWeekDay?.workouts.map((workout) => {
          return (
            <PlanWorkout
              planWeek={planWeek}
              workout={workout}
              key={`workout-${workout.id}`}
            />
          )
        })}
      </Stack>
    </Box>
  )
}

const PlanWorkout = ({ planWeek, workout }) => {
  const { refetch } = useManagePlanContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const constraints = []
  if (workout.targetMiles) {
    constraints.push(`${workout.targetMiles} miles`)
  }
  if (workout.targetTimeInMinutes) {
    constraints.push(`${workout.targetTimeInMinutes} minutes`)
  }

  // h={`${workoutCardHeight}px`}

  return (
    <>
      <Stack spacing="2">
        <Workout
          {...workout}
          title={getTitleForWorkout(workout)}
          onClick={() => console.log('selecting....', workout)}
        />
        <Button
          size="xs"
          colorScheme="green"
          variant="outline"
          onClick={onOpen}
          boxShadow="md"
        >
          Edit
        </Button>
      </Stack>
      <PlanWorkoutModal title="Edit Workout" isOpen={isOpen} onClose={onClose}>
        <EditPlanWorkoutModalCell
          id={workout.id}
          planWeekID={planWeek.id}
          onSaved={() => {
            onClose()
            refetch()
          }}
        />
      </PlanWorkoutModal>
    </>
  )
}

function getTitleForWorkout(workout) {
  const fields = [
    { key: 'actualMiles', format: (value) => value + ' mi' },
    { key: 'actualTimeInMinutes', format: (value) => value + 'min' },
    { key: 'actualNotes', format: (value) => value },
    { key: 'targetNotes', format: (value) => value },
    { key: 'targetMiles', format: (value) => value + ' mi' },
    { key: 'targetTimeInMinutes', format: (value) => value + 'min' },
  ]

  const match = fields.find((x) => workout[x.key])
  return match.format(workout[match.key])
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

function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getUTCDate() + days)
  return result
}

export function mapPlanWeekToDays(planWeek) {
  const startDate = new Date(planWeek.startDate)
  const days = {
    MONDAY: {
      dayOfWeek: 'MONDAY',
      workouts: [],
      date: addDays(startDate, 0),
    },
    TUESDAY: {
      dayOfWeek: 'TUESDAY',
      workouts: [],
      date: addDays(startDate, 1),
    },
    WEDNESDAY: {
      dayOfWeek: 'WEDNESDAY',
      workouts: [],
      date: addDays(startDate, 2),
    },
    THURSDAY: {
      dayOfWeek: 'THURSDAY',
      workouts: [],
      date: addDays(startDate, 3),
    },
    FRIDAY: {
      dayOfWeek: 'FRIDAY',
      workouts: [],
      date: addDays(startDate, 4),
    },
    SATURDAY: {
      dayOfWeek: 'SATURDAY',
      workouts: [],
      date: addDays(startDate, 5),
    },
    SUNDAY: {
      dayOfWeek: 'SUNDAY',
      workouts: [],
      date: addDays(startDate, 6),
    },
  }

  const daysWithWorkoutsAsObject = planWeek.planWorkouts.reduce(
    (daysSoFar, curr) => {
      const day = daysSoFar[curr.dayOfWeek]
      const y = {
        ...daysSoFar,
        [day.dayOfWeek]: {
          ...day,
          workouts: [...day.workouts, curr],
        },
      }
      return y
    },
    days
  )

  return Object.keys(daysWithWorkoutsAsObject).map((key) => {
    return daysWithWorkoutsAsObject[key]
  })
}

export default ManagePlan
