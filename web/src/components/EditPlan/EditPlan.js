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
  VisuallyHidden,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useEditPlanContext } from '../EditPlanCell/EditPlanContext'
import EditPlanWorkoutModalCell from '../EditPlanWorkoutModalCell'
import NewPlanWorkoutModalCell from '../NewPlanWorkoutModalCell'
import { PlanWorkoutModal } from '../PlanWorkoutModal'
import { Workout } from '../Workout'

const daysOfWeek = ['M', 'T', 'W', 'R', 'F', 'S', 'S']

const EditPlan = ({ plan }) => {
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

const workoutCardHeight = 100
const PlanWeeks = ({ planWeeks }) => {
  const { refetch } = useEditPlanContext()

  return planWeeks.map((planWeek) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
  const { refetch } = useEditPlanContext()
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
        <Workout {...workout} title={workout.targetNotes} />
        <Button
          size="xs"
          colorScheme="green"
          variant="outline"
          onClick={onOpen}
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
