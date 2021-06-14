import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const plans = () => {
  return db.plan.findMany()
}

export const plan = ({ id }: Prisma.PlanWhereUniqueInput) => {
  return db.plan.findUnique({
    where: { id },
  })
}

interface CreatePlanArgs {
  input: Prisma.PlanCreateInput
}

export const createPlan = ({ input }: CreatePlanArgs) => {
  return db.plan.create({
    data: input,
  })
}

interface UpdatePlanArgs extends Prisma.PlanWhereUniqueInput {
  input: Prisma.PlanUpdateInput
}

export const updatePlan = ({ id, input }: UpdatePlanArgs) => {
  return db.plan.update({
    data: input,
    where: { id },
  })
}

export const deletePlan = ({ id }: Prisma.PlanWhereUniqueInput) => {
  return db.plan.delete({
    where: { id },
  })
}

export const Plan = {
  planWeeks: (_obj, { root }: ResolverArgs<Prisma.PlanWhereUniqueInput>) =>
    db.plan
      .findUnique({ where: { id: root.id } })
      .planWeeks({ orderBy: { startDate: 'asc' } }),
}
