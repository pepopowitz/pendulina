import {
  CheckboxField,
  Form,
  FormError,
  FieldError,
  Label,
  SelectField,
  TextField,
  Submit,
  HiddenField,
} from '@redwoodjs/forms'
import { FormControl, FormLabel, Text } from '@chakra-ui/react'

import { ActivityOptions } from '../ActivityOptions'

export const PlanWorkoutModalForm = (props) => {
  const { planWeek, planWorkout } = props
  const onSubmit = (data) => {
    props.onSave(data, planWorkout?.id)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <FormControl id="planWeek">
          <FormLabel textColor="gray.600">Plan Week</FormLabel>
          <Text>
            Week {planWeek.weekNumber}: {planWeek.intention}
          </Text>
        </FormControl>

        <Label name="planWeekID" className="rw-label">
          Plan Week
        </Label>
        <div className="rw-input">
          Week {planWeek.weekNumber}: {planWeek.intention}
        </div>

        <Label
          name="targetMiles"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target miles
        </Label>
        <TextField
          name="targetMiles"
          defaultValue={props.planWorkout?.targetMiles}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="targetMiles" className="rw-field-error" />

        {/* ... */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}
