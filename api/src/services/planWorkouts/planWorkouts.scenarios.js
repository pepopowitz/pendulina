export const standard = defineScenario({
  planWorkout: {
    one: {
      dayOfWeek: 'SUNDAY',
      targetMiles: 'String',
      targetTimeInSeconds: 'String',
      targetNotes: 'String',
      activity: { create: { name: 'String', icon: 'String' } },
    },

    two: {
      dayOfWeek: 'SUNDAY',
      targetMiles: 'String',
      targetTimeInSeconds: 'String',
      targetNotes: 'String',
      activity: { create: { name: 'String', icon: 'String' } },
    },
  },
})
