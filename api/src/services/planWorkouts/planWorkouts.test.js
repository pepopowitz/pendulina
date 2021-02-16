import {
  planWorkouts,
  planWorkout,
  createPlanWorkout,
  updatePlanWorkout,
  deletePlanWorkout,
} from './planWorkouts'

describe('planWorkouts', () => {
  scenario('returns all planWorkouts', async (scenario) => {
    const result = await planWorkouts()

    expect(result.length).toEqual(Object.keys(scenario.planWorkout).length)
  })

  scenario('returns a single planWorkout', async (scenario) => {
    const result = await planWorkout({ id: scenario.planWorkout.one.id })

    expect(result).toEqual(scenario.planWorkout.one)
  })

  scenario('creates a planWorkout', async (scenario) => {
    const result = await createPlanWorkout({
      input: {
        dayOfWeek: 'SUNDAY',
        targetMiles: 'String',
        targetTime: 'String',
        targetNotes: 'String',
        activityId: 'scenario.planWorkout.two.activityId',
      },
    })

    expect(result.dayOfWeek).toEqual('SUNDAY')
    expect(result.targetMiles).toEqual('String')
    expect(result.targetTime).toEqual('String')
    expect(result.targetNotes).toEqual('String')
    expect(result.activityId).toEqual('scenario.planWorkout.two.activityId')
  })

  scenario('updates a planWorkout', async (scenario) => {
    const original = await planWorkout({ id: scenario.planWorkout.one.id })
    const result = await updatePlanWorkout({
      id: original.id,
      input: { dayOfWeek: 'SATURDAY' },
    })

    expect(result.dayOfWeek).toEqual('SATURDAY')
  })

  scenario('deletes a planWorkout', async (scenario) => {
    const original = await deletePlanWorkout({
      id: scenario.planWorkout.one.id,
    })

    const result = await planWorkout({ id: original.id })

    expect(result).toEqual(null)
  })
})
