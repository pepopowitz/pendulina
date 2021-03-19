/*
  Warnings:

  - Made the column `planWeekId` on table `PlanWorkout` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PlanWeek" ADD COLUMN     "startDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PlanWorkout" ALTER COLUMN "planWeekId" SET NOT NULL;
