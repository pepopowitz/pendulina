import { render } from '@redwoodjs/testing'
import { standard } from '../EditPlanCell/EditPlanCell.mock'
import EditPlan, { mapPlanWorkoutsToDays } from './EditPlan'

describe('EditPlan', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPlan plan={standard().plan} />)
    }).not.toThrow()
  })
})

describe('mapPlanWorkoutsToDays', () => {
  describe('when there are no workouts', () => {
    it('returns 7 empty days', () => {
      const planWorkouts = []

      const result = mapPlanWorkoutsToDays(planWorkouts)

      expect(result.length).toEqual(7)
      expect(result.map((x) => x.workouts).flat()).toEqual([])
    })
  })

  describe('when there are workouts', () => {
    let planWorkouts
    beforeEach(() => {
      planWorkouts = [
        {
          id: 111,
          dayOfWeek: 'TUESDAY',
          activity: {
            name: 'Cycling',
            icon: '🚴‍♂️',
          },
          targetMiles: null,
          targetTimeInMinutes: 60,
          targetNotes: 'Recovery ride',
        },
        {
          id: 222,
          dayOfWeek: 'THURSDAY',
          activity: {
            name: 'Running',
            icon: '🏃‍♂️',
          },
          targetMiles: 5,
          targetTimeInMinutes: null,
          targetNotes: 'Recovery run',
        },
      ]
    })
    it('assigns them to the correct days', () => {
      const result = mapPlanWorkoutsToDays(planWorkouts)

      expect(result.length).toEqual(7)
      expect(result.map((x) => x.workouts).flat().length).toEqual(2)

      const tuesday = result.find((x) => x.dayOfWeek === 'TUESDAY')
      expect(tuesday.workouts.length).toEqual(1)
      expect(tuesday.workouts[0]).toEqual(planWorkouts[0])

      const thursday = result.find((x) => x.dayOfWeek === 'THURSDAY')
      expect(thursday.workouts.length).toEqual(1)
      expect(thursday.workouts[0]).toEqual(planWorkouts[1])
    })
  })
})
