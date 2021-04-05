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

        <HiddenField
          name="planWeekId"
          value={planWeek.id}
          transformValue="Int"
        />
        <Label name="planWeekID" className="rw-label">
          Plan Week
        </Label>
        <div className="rw-input">
          Week {planWeek.weekNumber}: {planWeek.intention}
        </div>

        <Label
          name="dayOfWeek"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Day of week
        </Label>
        <SelectField
          name="dayOfWeek"
          defaultValue={planWorkout?.dayOfWeek}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <option>MONDAY</option>
          <option>TUESDAY</option>
          <option>WEDNESDAY</option>
          <option>THURSDAY</option>
          <option>FRIDAY</option>
          <option>SATURDAY</option>
          <option>SUNDAY</option>
        </SelectField>
        <FieldError name="dayOfWeek" className="rw-field-error" />

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
