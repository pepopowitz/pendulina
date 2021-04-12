import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { PlanWorkoutModalForm } from '../PlanWorkoutModalForm'

export const QUERY = gql`
  query EditPlanWorkoutModalQuery($planWeekID: Int!, $id: Int!) {
    planWorkout: planWorkout(id: $id) {
      id
      dayOfWeek
      isKeyWorkout
      targetMiles
      targetTimeInMinutes
      targetNotes
      activityId
    }
    activities {
      id
      icon
      name
    }
    planWeek(id: $planWeekID) {
      id
      weekNumber
      intention
      plan {
        id
      }
    }
  }
`

const UPDATE_PLAN_WORKOUT_MUTATION = gql`
  mutation UpdatePlanWorkoutMutation(
    $id: Int!
    $input: UpdatePlanWorkoutInput!
  ) {
    updatePlanWorkout(id: $id, input: $input) {
      id
      dayOfWeek
      activityId
      isKeyWorkout
      targetMiles
      targetTimeInMinutes
      targetNotes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ planWorkout, activities, planWeek, onClose }) => {
  const [updatePlanWorkout, { loading, error }] = useMutation(
    UPDATE_PLAN_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        //navigate(routes.editPlan({ id: planID }))
        // TODO: why does this update the parent screen??? It's great, but I'm confused why it happens.
        toast.success('Workout updated!')
        onClose()
      },
    }
  )

  const onSave = (input, id) => {
    updatePlanWorkout({ variables: { id, input } })
    onClose()
  }

  return (
    <Modal
      size="xl"
      closeOnOverlayClick={false}
      scrollBehavior="inside"
      isOpen
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Workout</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PlanWorkoutModalForm
            activities={activities}
            planWeek={planWeek}
            planWorkout={planWorkout}
            onSave={onSave}
            loading={loading}
            error={error}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
