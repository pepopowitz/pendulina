import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

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
  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>planWorkout: {JSON.stringify(planWorkout)}</p>
          <p>activities: {JSON.stringify(activities)}</p>
          <p>planWeek: {JSON.stringify(planWeek)}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
