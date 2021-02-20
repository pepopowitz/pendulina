/*
  Warnings:

  - You are about to drop the column `targetTimeInSeconds` on the `PlanWorkout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PlanWorkout" DROP COLUMN "targetTimeInSeconds",
ADD COLUMN     "targetTimeInMinutes" TEXT;
