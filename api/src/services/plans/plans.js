import { db } from 'src/lib/db'

export const plans = () => {
  return db.plan.findMany()
}

export const plan = ({ id }) => {
  return db.plan.findUnique({
    where: { id },
  })
}

export const Plan = {
  planWeeks: (_obj, { root }) =>
    db.plan.findUnique({ where: { id: root.id } }).planWeeks(),
}
