import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlanWeekCreateArgs>({
  planWeek: {
    one: { weekNumber: 2772041, startDate: '2021-06-14T04:28:05Z' },
    two: { weekNumber: 4073142, startDate: '2021-06-14T04:28:05Z' },
  },
})

export type StandardScenario = typeof standard
