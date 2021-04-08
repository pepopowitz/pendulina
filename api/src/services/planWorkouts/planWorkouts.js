import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const planWorkouts = () => {
  return db.planWorkout.findMany()
}

export const planWorkout = ({ id }) => {
  return db.planWorkout.findUnique({
    where: { id },
  })
}

export const createPlanWorkout = ({ input }) => {
  requireAuth()
  return db.planWorkout.create({
    data: input,
  })
}

export const updatePlanWorkout = ({ id, input }) => {
  requireAuth()
  return db.planWorkout.update({
    data: input,
    where: { id },
  })
}

// TODO: remove this once the entire form is converted!!!
export const updatePlanWorkout2 = ({ id, input }) => {
  requireAuth()
  return db.planWorkout.update({
    data: input,
    where: { id },
  })
}

export const deletePlanWorkout = ({ id }) => {
  requireAuth()
  return db.planWorkout.delete({
    where: { id },
  })
}

export const PlanWorkout = {
  activity: (_obj, { root }) =>
    db.planWorkout.findUnique({ where: { id: root.id } }).activity(),
}
