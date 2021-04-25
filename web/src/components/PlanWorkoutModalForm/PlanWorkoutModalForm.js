import {
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  Spacer,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { ActivityOptions } from '../ActivityOptions'

export const PlanWorkoutModalForm = (props) => {
  const { planWeek, planWorkout } = props
  const form = useForm()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = form
  const onSubmit = (data) => {
    data = {
      ...data,
      // this kinda stinks. Redwood forms handled this for us with `<HiddenField transformValue="Int">`.
      //   with chakra forms we have to massage this ourselves.
      planWeekId: parseInt(data.planWeekId),
      activityId: parseInt(data.activityId),
    }
    props.onSave(data, planWorkout?.id)
  }

  const deleteButton = planWorkout?.id && props.onDelete && (
    <Button
      ml={3}
      colorScheme="red"
      variant="outline"
      onClick={() => props.onDelete(planWorkout?.id)}
    >
      Delete
    </Button>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Flex flexDirection="row">
          <FormControl isDisabled>
            <FormLabel htmlFor="planWeek">Plan Week</FormLabel>
            <Input
              name="planWeek"
              value={`Week ${planWeek.weekNumber}: ${planWeek.intention}`}
            />
          </FormControl>
          <Spacer mx={5} />
          <PdlSelect
            form={form}
            id="dayOfWeek"
            label="Day of week"
            defaultValue={planWorkout?.dayOfWeek}
            validations={{ required: true }}
          >
            <option>MONDAY</option>
            <option>TUESDAY</option>
            <option>WEDNESDAY</option>
            <option>THURSDAY</option>
            <option>FRIDAY</option>
            <option>SATURDAY</option>
            <option>SUNDAY</option>
          </PdlSelect>
        </Flex>
        <FormControl>
          <Input
            {...register('planWeekId')}
            type="hidden"
            value={planWeek.id}
          />
        </FormControl>

        <Spacer my={5} />

        <Flex flexDirection="row">
          <PdlSelect
            form={form}
            id="activityId"
            label="Activity"
            defaultValue={planWorkout?.activityId}
            validations={{ required: true }}
          >
            <ActivityOptions activities={props.activities} />
          </PdlSelect>

          <Spacer mx={5} />

          <PdlCheckbox
            form={form}
            id="isKeyWorkout"
            label="Key workout?"
            defaultValue={planWorkout?.isKeyWorkout}
          />
        </Flex>

        <Divider my={5} />

        <Heading as="h3" size="md" my={3}>
          Goals
        </Heading>

        <Flex flexDirection="row">
          <PdlInput
            form={form}
            id="targetMiles"
            label="Target miles"
            defaultValue={planWorkout?.targetMiles}
          />

          <Spacer mx={5} />

          <PdlInput
            form={form}
            id="targetTimeInMinutes"
            label="Target time (minutes)"
            defaultValue={planWorkout?.targetTimeInMinutes}
          />
        </Flex>

        <Spacer my={5} />

        <PdlInput
          form={form}
          id="targetNotes"
          label="Target notes"
          defaultValue={planWorkout?.targetNotes}
        />

        <Divider my={5} />

        <Heading as="h3" size="md" my={3}>
          Actuals
        </Heading>

        <Flex flexDirection="row">
          <PdlSelect
            form={form}
            id="status"
            label="Status"
            defaultValue={planWorkout?.status}
            validations={{ required: true }}
          >
            <option>UPCOMING</option>
            <option>COMPLETED</option>
            <option>MISSED</option>
          </PdlSelect>
          <Spacer mx={5} />
          <PdlInput
            form={form}
            id="actualMiles"
            label="Actual miles"
            defaultValue={planWorkout?.actualMiles}
          />
        </Flex>
        <Spacer my={5} />

        <Flex flexDirection="row">
          <PdlInput
            form={form}
            id="actualTimeInMinutes"
            label="Actual time (minutes)"
            defaultValue={planWorkout?.actualTimeInMinutes}
          />
          <Spacer mx={5} />
          <PdlInput
            form={form}
            id="actualElevationInFeet"
            label="Actual elevation (ft)"
            defaultValue={planWorkout?.actualElevationInFeet}
          />
        </Flex>
        <Spacer my={5} />
        <PdlInput
          form={form}
          id="actualNotes"
          label="Actual notes"
          defaultValue={planWorkout?.actualNotes}
        />
        <Spacer my={5} />
        <PdlInput
          form={form}
          id="actualMantras"
          label="Actual mantras"
          defaultValue={planWorkout?.actualMantras}
        />
        <Spacer my={5} />
        <PdlInput
          form={form}
          id="actualReflection"
          label="Actual reflection"
          defaultValue={planWorkout?.actualReflection}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          colorScheme="green"
          isLoading={isSubmitting || props.loading}
          type="submit"
          disabled={isSubmitting || props.loading}
        >
          Save
        </Button>
        {deleteButton}
      </ModalFooter>
    </form>
  )
}

const PdlInput = ({ form, id, label, defaultValue, validations }) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <PdlField errors={errors} id={id} label={label}>
      <Input
        {...register(id, validations)}
        placeholder={label}
        defaultValue={defaultValue}
      />
    </PdlField>
  )
}

const PdlSelect = ({
  children,
  form,
  id,
  label,
  defaultValue,
  validations,
}) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <PdlField errors={errors} id={id} label={label}>
      <Select {...register(id, validations)} defaultValue={defaultValue}>
        {children}
      </Select>
    </PdlField>
  )
}

const PdlCheckbox = ({ form, id, label, defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <PdlField errors={errors} id={id} label={label}>
      <Checkbox {...register(id)} defaultChecked={defaultValue}>
        {label}
      </Checkbox>
    </PdlField>
  )
}

const PdlField = ({ children, errors, id, label }) => {
  return (
    <FormControl isInvalid={errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {children}

      <FormErrorMessage>
        {/* TODO: a more robust solution for error messages */}
        {errors[id] && `${label} is required`}
      </FormErrorMessage>
    </FormControl>
  )
}
