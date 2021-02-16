import { db } from 'src/lib/db'

export const planWorkouts = () => {
  return db.planWorkout.findMany()
}

export const planWorkout = ({ id }) => {
  return db.planWorkout.findUnique({
    where: { id },
  })
}

export const createPlanWorkout = ({ input }) => {
  return db.planWorkout.create({
    data: input,
  })
}

export const updatePlanWorkout = ({ id, input }) => {
  return db.planWorkout.update({
    data: input,
    where: { id },
  })
}

export const deletePlanWorkout = ({ id }) => {
  return db.planWorkout.delete({
    where: { id },
  })
}

export const PlanWorkout = {
  activity: (_obj, { root }) =>
    db.planWorkout.findUnique({ where: { id: root.id } }).activity(),
}
