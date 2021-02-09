import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const activities = () => {
  return db.activity.findMany()
}

export const activity = ({ id }) => {
  return db.activity.findOne({
    where: { id },
  })
}

export const createActivity = ({ input }) => {
  debugger
  requireAuth()
  return db.activity.create({
    data: input,
  })
}

export const updateActivity = ({ id, input }) => {
  requireAuth()
  return db.activity.update({
    data: input,
    where: { id },
  })
}

export const deleteActivity = ({ id }) => {
  requireAuth()
  return db.activity.delete({
    where: { id },
  })
}
