import { plans, plan, createPlan, updatePlan, deletePlan } from './plans'
import type { StandardScenario } from './plans.scenarios'

describe('plans', () => {
  scenario('returns all plans', async (scenario: StandardScenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })

  scenario('returns a single plan', async (scenario: StandardScenario) => {
    const result = await plan({ id: scenario.plan.one.id })

    expect(result).toEqual(scenario.plan.one)
  })

  scenario('creates a plan', async () => {
    const result = await createPlan({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a plan', async (scenario: StandardScenario) => {
    const original = await plan({ id: scenario.plan.one.id })
    const result = await updatePlan({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a plan', async (scenario: StandardScenario) => {
    const original = await deletePlan({ id: scenario.plan.one.id })
    const result = await plan({ id: original.id })

    expect(result).toEqual(null)
  })
})
