import { db } from 'src/lib/db'

export const activities = () => {
  return db.activity.findMany()
}

export const activity = ({ id }) => {
  return db.activity.findOne({
    where: { id },
  })
}

export const createActivity = ({ input }) => {
  return db.activity.create({
    data: input,
  })
}

export const updateActivity = ({ id, input }) => {
  return db.activity.update({
    data: input,
    where: { id },
  })
}

export const deleteActivity = ({ id }) => {
  return db.activity.delete({
    where: { id },
  })
}
