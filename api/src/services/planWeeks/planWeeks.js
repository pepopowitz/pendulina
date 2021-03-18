import { db } from 'src/lib/db'

export const planWeeks = () => {
  return db.planWeek.findMany()
}

export const planWeek = ({ id }) => {
  return db.planWeek.findUnique({
    where: { id },
  })
}

export const PlanWeek = {
  planWorkouts: (_obj, { root }) => planWeek({ id: root.id }).planWorkouts(),
  plan: (_obj, { root }) => planWeek({ id: root.id }).Plan(),
}
