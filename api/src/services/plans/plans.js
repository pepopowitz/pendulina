import { db } from 'src/lib/db'

export const plans = () => {
  return db.plan.findMany()
}

export const Plan = {
  planWeeks: (_obj, { root }) =>
    db.plan.findUnique({ where: { id: root.id } }).planWeeks(),
}
