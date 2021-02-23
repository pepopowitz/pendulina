import { plans } from './plans'

describe('plans', () => {
  scenario('returns all plans', async (scenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })
})
