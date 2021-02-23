import {
  activities,
  activity,
  createActivity,
  updateActivity,
  deleteActivity,
} from './activities'

describe('activities', () => {
  beforeEach(() => {
    mockCurrentUser({ roles: ['admin'] })
  })

  scenario('returns all activities', async (scenario) => {
    const result = await activities()

    expect(result.length).toEqual(Object.keys(scenario.activity).length)
  })

  scenario('returns a single activity', async (scenario) => {
    const result = await activity({ id: scenario.activity.one.id })

    expect(result).toEqual(scenario.activity.one)
  })

  scenario('creates a activity', async (scenario) => {
    const result = await createActivity({
      input: {
        name: 'String',
        icon: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.icon).toEqual('String')
  })

  scenario('updates a activity', async (scenario) => {
    const original = await activity({ id: scenario.activity.one.id })
    const result = await updateActivity({
      id: original.id,
      input: { name: 'String6901152' },
    })

    expect(result.name).toEqual('String6901152')
  })

  scenario('deletes a activity', async (scenario) => {
    const original = await deleteActivity({ id: scenario.activity.one.id })
    const result = await activity({ id: original.id })

    expect(result).toEqual(null)
  })
})
