/*
  Warnings:

  - Made the column `startDate` on table `PlanWeek` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PlanWeek" ALTER COLUMN "startDate" SET NOT NULL;
