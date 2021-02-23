import { db } from 'src/lib/db'

export const planWeeks = () => {
  return db.planWeek.findMany()
}

export const PlanWeek = {
  planWorkouts: (_obj, { root }) =>
    db.planWeek.findUnique({ where: { id: root.id } }).planWorkouts(),
  Plan: (_obj, { root }) =>
    db.planWeek.findUnique({ where: { id: root.id } }).Plan(),
}
