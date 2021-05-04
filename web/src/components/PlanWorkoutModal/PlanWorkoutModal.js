import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react'

export const PlanWorkoutModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      size="xl"
      closeOnOverlayClick={false}
      scrollBehavior="outside"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  )
}

export default PlanWorkoutModal
