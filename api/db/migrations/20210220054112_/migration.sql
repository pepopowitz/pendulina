/*
  Warnings:

  - You are about to drop the column `targetTime` on the `PlanWorkout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PlanWorkout" DROP COLUMN "targetTime",
ADD COLUMN     "targetTimeInSeconds" TEXT NOT NULL DEFAULT E'';
