import { planWeeks } from './planWeeks'

describe('planWeeks', () => {
  scenario('returns all planWeeks', async (scenario) => {
    const result = await planWeeks()

    expect(result.length).toEqual(Object.keys(scenario.planWeek).length)
  })
})
