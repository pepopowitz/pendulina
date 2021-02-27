import { planWeek, planWeeks } from './planWeeks'

describe('planWeeks', () => {
  scenario('returns all planWeeks', async (scenario) => {
    const result = await planWeeks()

    expect(result.length).toEqual(Object.keys(scenario.planWeek).length)
  })

  scenario('returns a single planWeek', async (scenario) => {
    const result = await planWeek({ id: scenario.planWeek.one.id })

    expect(result).toEqual(scenario.planWeek.one)
  })
})
