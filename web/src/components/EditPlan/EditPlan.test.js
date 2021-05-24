import { render } from '@redwoodjs/testing'
import { standard } from '../EditPlanCell/EditPlanCell.mock'
import EditPlan, { mapPlanWeekToDays } from './EditPlan'

describe('EditPlan', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPlan plan={standard().plan} />)
    }).not.toThrow()
  })
})

describe('mapPlanWeekToDays', () => {
  describe('when there are no workouts', () => {
    it('returns 7 empty days', () => {
      const planWeek = { startDate: '2021-01-26T12:00:00', planWorkouts: [] }

      const result = mapPlanWeekToDays(planWeek)

      expect(result.length).toEqual(7)
      expect(result.map((x) => x.date.getDate())).toEqual([
        26,
        27,
        28,
        29,
        30,
        31,
        1,
      ])
      expect(result.map((x) => x.workouts).flat()).toEqual([])
    })
  })

  describe('when there are workouts', () => {
    const planWeek = standard().plan.planWeeks[0]
    it('assigns them to the correct days', () => {
      const result = mapPlanWeekToDays(planWeek)

      expect(result.length).toEqual(7)
      expect(result.map((x) => x.workouts).flat().length).toEqual(2)

      const tuesday = result.find((x) => x.dayOfWeek === 'TUESDAY')
      expect(tuesday.date.getDate()).toEqual(27)
      expect(tuesday.workouts.length).toEqual(1)
      expect(tuesday.workouts[0]).toEqual(planWeek.planWorkouts[0])

      const thursday = result.find((x) => x.dayOfWeek === 'THURSDAY')
      expect(thursday.date.getDate()).toEqual(29)
      expect(thursday.workouts.length).toEqual(1)
      expect(thursday.workouts[0]).toEqual(planWeek.planWorkouts[1])
    })
  })
})
