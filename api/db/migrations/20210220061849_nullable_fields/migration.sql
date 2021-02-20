-- AlterTable
ALTER TABLE "PlanWeek" ALTER COLUMN "intention" DROP NOT NULL,
ALTER COLUMN "weekNumber" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PlanWorkout" ALTER COLUMN "targetMiles" DROP NOT NULL,
ALTER COLUMN "targetNotes" DROP NOT NULL,
ALTER COLUMN "targetTimeInSeconds" DROP NOT NULL,
ALTER COLUMN "targetTimeInSeconds" DROP DEFAULT;
