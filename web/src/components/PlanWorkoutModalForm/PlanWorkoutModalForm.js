import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { ActivityOptions } from '../ActivityOptions'

export const PlanWorkoutModalForm = (props) => {
  const { planWeek, planWorkout } = props
  const { handleSubmit, errors, register, formState } = useForm()
  const onSubmit = (data) => {
    props.onSave(data, planWorkout?.id)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isDisabled>
          <FormLabel htmlFor="planWeek">Plan Week</FormLabel>
          <Input
            name="planWeek"
            value={`Week ${planWeek.weekNumber}: ${planWeek.intention}`}
          />
        </FormControl>

        <FormControl isInvalid={errors.targetMiles}>
          <FormLabel htmlFor="targetMiles">Target miles</FormLabel>
          <Input
            name="targetMiles"
            placeholder="Target miles"
            ref={register({ required: true })}
            defaultValue={planWorkout?.targetMiles}
          />

          <FormErrorMessage>
            {errors.targetMiles && 'Target miles is required'}
          </FormErrorMessage>
        </FormControl>

        {/* ... */}

        <Button
          mt={4}
          colorScheme="green"
          isLoading={formState.isSubmitting || props.loading}
          type="submit"
          disabled={formState.isSubmitting || props.loading}
        >
          Save
        </Button>
      </form>
    </div>
  )
}

// This abstraction doesn't work, I _think_ because `useForm` is called at a different level, so it's using
//  a different context or something.
// //CR = Chakra/Redwood
// // validations={{ required: true }}
// const CRInput = ({ id, label, defaultValue, errors, registervalidations = {} }) => {
//   const { errors, register } = useForm()

//   return (
//     <FormControl isInvalid={errors[id]}>
//       <FormLabel htmlFor={id}>{label}</FormLabel>
//       <Input
//         name={id}
//         placeholder={label}
//         ref={register(validations)}
//         defaultValue={defaultValue}
//       />

//       <FormErrorMessage>
//         {/* TODO: a more robust solution for error messages */}
//         {errors[id] && `${label} is required`}
//       </FormErrorMessage>
//     </FormControl>
//   )
// }
