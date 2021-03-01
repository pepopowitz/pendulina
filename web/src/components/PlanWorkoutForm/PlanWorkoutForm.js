import {
  Form,
  FormError,
  FieldError,
  Label,
  SelectField,
  TextField,
  NumberField,
  Submit,
  HiddenField,
} from '@redwoodjs/forms'
import { ActivityOptions } from '../ActivityOptions'

const PlanWorkoutForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.planWorkout?.id)
  }

  const { planWeek } = props
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        {/*
          HiddenField doesn't work -- `id` is an int here, but when it gets submitted to graphql it is a string;
          `api | Error: Variable "$input" got invalid value "2" at "input.planWeekId"; Int cannot represent non-integer value: "2"`
        */}
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
          defaultValue={props.planWorkout?.dayOfWeek}
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

        <Label
          name="targetTimeInMinutes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target time (minutes)
        </Label>
        <TextField
          name="targetTimeInMinutes"
          defaultValue={props.planWorkout?.targetTimeInMinutes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="targetTimeInMinutes" className="rw-field-error" />

        <Label
          name="targetNotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target notes
        </Label>
        <TextField
          name="targetNotes"
          defaultValue={props.planWorkout?.targetNotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="targetNotes" className="rw-field-error" />

        <Label
          name="activityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Activity
        </Label>
        <SelectField
          name="activityId"
          defaultValue={props.planWorkout?.activityId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <ActivityOptions activities={props.activities} />
        </SelectField>
        <FieldError name="activityId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlanWorkoutForm
