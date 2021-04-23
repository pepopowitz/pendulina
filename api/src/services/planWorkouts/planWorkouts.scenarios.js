export const standard = defineScenario({
  planWeek: {
    one: {
      intention: 'do stuff',
      weekNumber: 1,
      startDate: new Date('01/01/2020'),
    },
  },
  planWorkout: {
    one: {
      dayOfWeek: 'SUNDAY',
      targetMiles: 'String',
      targetTimeInMinutes: 'String',
      targetNotes: 'String',
      activity: { create: { name: 'String', icon: 'String' } },
      PlanWeek: {
        create: { weekNumber: 1, startDate: new Date('01/01/2020') },
      },
    },

    two: {
      dayOfWeek: 'SUNDAY',
      targetMiles: 'String',
      targetTimeInMinutes: 'String',
      targetNotes: 'String',
      activity: { create: { name: 'String', icon: 'String' } },
      PlanWeek: {
        create: { weekNumber: 2, startDate: new Date('01/08/2020') },
      },
    },
  },
})
