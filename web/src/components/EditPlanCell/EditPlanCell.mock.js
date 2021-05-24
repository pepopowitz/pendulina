// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  plan: {
    id: 42,
    name: 'Half marathon',
    planWeeks: [
      {
        id: 12,
        weekNumber: 1,
        startDate: '2021-01-26T00:00:00.000',
        intention: 'start it up',
        planWorkouts: [
          {
            id: 121,
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
            id: 122,
            dayOfWeek: 'THURSDAY',
            activity: {
              name: 'Running',
              icon: '🏃‍♂️',
            },
            targetMiles: 5,
            targetTimeInMinutes: null,
            targetNotes: 'Recovery run',
          },
        ],
      },
      {
        id: 23,
        weekNumber: 2,
        startDate: '2021-02-04T00:00:00.000',
        intention: 'finish it',
        planWorkouts: [],
      },
    ],
  },
})
