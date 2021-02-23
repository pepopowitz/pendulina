import { plan, plans } from './plans'

describe('plans', () => {
  scenario('returns all plans', async (scenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })

  scenario('returns a single plan', async (scenario) => {
    const result = await plan({ id: scenario.plan.one.id })

    expect(result).toEqual(scenario.plan.one)
  })
})
