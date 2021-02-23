// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  plan: {
    id: 42,
    name: 'Half marathon',
    planWeeks: [
      {
        id: 12,
        weekNumber: 1,
        intention: 'start it up',
      },
      {
        id: 23,
        weekNumber: 2,
        intention: 'finish it',
      },
    ],
  },
})
