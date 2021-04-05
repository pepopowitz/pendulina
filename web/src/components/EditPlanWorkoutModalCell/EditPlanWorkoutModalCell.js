import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ planWorkout, activities, planWeek, onClose }) => {
  const onSave = (input, id) => {
    console.log('saving')
    onClose()
  }

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Workout</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PlanWorkoutModalForm
            planWeek={planWeek}
            planWorkout={planWorkout}
            onSave={onSave}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
