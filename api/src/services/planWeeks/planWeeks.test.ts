import {
  planWeeks,
  planWeek,
  createPlanWeek,
  updatePlanWeek,
  deletePlanWeek,
} from './planWeeks'
import type { StandardScenario } from './planWeeks.scenarios'

describe('planWeeks', () => {
  scenario('returns all planWeeks', async (scenario: StandardScenario) => {
    const result = await planWeeks()

    expect(result.length).toEqual(Object.keys(scenario.planWeek).length)
  })

  scenario('returns a single planWeek', async (scenario: StandardScenario) => {
    const result = await planWeek({ id: scenario.planWeek.one.id })

    expect(result).toEqual(scenario.planWeek.one)
  })

  scenario('creates a planWeek', async () => {
    const result = await createPlanWeek({
      input: { weekNumber: 6817684, startDate: '2021-06-14T04:28:05Z' },
    })

    expect(result.weekNumber).toEqual(6817684)
    expect(result.startDate).toEqual('2021-06-14T04:28:05Z')
  })

  scenario('updates a planWeek', async (scenario: StandardScenario) => {
    const original = await planWeek({ id: scenario.planWeek.one.id })
    const result = await updatePlanWeek({
      id: original.id,
      input: { weekNumber: 3303449 },
    })

    expect(result.weekNumber).toEqual(3303449)
  })

  scenario('deletes a planWeek', async (scenario: StandardScenario) => {
    const original = await deletePlanWeek({ id: scenario.planWeek.one.id })
    const result = await planWeek({ id: original.id })

    expect(result).toEqual(null)
  })
})
