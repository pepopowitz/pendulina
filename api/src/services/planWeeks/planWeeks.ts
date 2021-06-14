import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const planWeeks = () => {
  return db.planWeek.findMany()
}

export const planWeek = ({ id }: Prisma.PlanWeekWhereUniqueInput) => {
  return db.planWeek.findUnique({
    where: { id },
  })
}

interface CreatePlanWeekArgs {
  input: Prisma.PlanWeekCreateInput
}

export const createPlanWeek = ({ input }: CreatePlanWeekArgs) => {
  return db.planWeek.create({
    data: input,
  })
}

interface UpdatePlanWeekArgs extends Prisma.PlanWeekWhereUniqueInput {
  input: Prisma.PlanWeekUpdateInput
}

export const updatePlanWeek = ({ id, input }: UpdatePlanWeekArgs) => {
  return db.planWeek.update({
    data: input,
    where: { id },
  })
}

export const deletePlanWeek = ({ id }: Prisma.PlanWeekWhereUniqueInput) => {
  return db.planWeek.delete({
    where: { id },
  })
}

export const PlanWeek = {
  planWorkouts: (
    _obj,
    { root }: ResolverArgs<Prisma.PlanWeekWhereUniqueInput>
  ) => db.planWeek.findUnique({ where: { id: root.id } }).planWorkouts(),
  plan: (_obj, { root }: ResolverArgs<Prisma.PlanWeekWhereUniqueInput>) =>
    db.planWeek.findUnique({ where: { id: root.id } }).Plan(),
}
