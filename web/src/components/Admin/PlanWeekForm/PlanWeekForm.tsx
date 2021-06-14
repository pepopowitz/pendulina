import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PlanWeekForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.planWeek?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="weekNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Week number
        </Label>
        <NumberField
          name="weekNumber"
          defaultValue={props.planWeek?.weekNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="weekNumber" className="rw-field-error" />

        <Label
          name="startDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start date
        </Label>
        <DatetimeLocalField
          name="startDate"
          defaultValue={formatDatetime(props.planWeek?.startDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="startDate" className="rw-field-error" />

        <Label
          name="intention"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Intention
        </Label>
        <TextField
          name="intention"
          defaultValue={props.planWeek?.intention}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="intention" className="rw-field-error" />

        <Label
          name="planId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Plan id
        </Label>
        <NumberField
          name="planId"
          defaultValue={props.planWeek?.planId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="planId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlanWeekForm
