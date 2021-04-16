/*
  Warnings:

  - You are about to drop the column `status` on the `PlanWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `actualMiles` on the `PlanWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `actualTimeInMinutes` on the `PlanWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `actualElevationInFeet` on the `PlanWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `actualNotes` on the `PlanWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `actualMantras` on the `PlanWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `actualReflection` on the `PlanWorkout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PlanWorkout" DROP COLUMN "status",
DROP COLUMN "actualMiles",
DROP COLUMN "actualTimeInMinutes",
DROP COLUMN "actualElevationInFeet",
DROP COLUMN "actualNotes",
DROP COLUMN "actualMantras",
DROP COLUMN "actualReflection";
