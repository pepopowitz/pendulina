export const standard = defineScenario({
  planWorkout: {
    one: {
      dayOfWeek: 'SUNDAY',
      targetMiles: 'String',
      targetTime: 'String',
      targetNotes: 'String',
      activity: { create: { name: 'String', icon: 'String' } },
    },

    two: {
      dayOfWeek: 'SUNDAY',
      targetMiles: 'String',
      targetTime: 'String',
      targetNotes: 'String',
      activity: { create: { name: 'String', icon: 'String' } },
    },
  },
})
