-- CreateEnum
CREATE TYPE "WorkoutStatus" AS ENUM ('UPCOMING', 'COMPLETED', 'MISSED');

-- AlterTable
ALTER TABLE "PlanWorkout" ADD COLUMN     "status" "WorkoutStatus" NOT NULL DEFAULT E'UPCOMING',
ADD COLUMN     "actualMiles" TEXT,
ADD COLUMN     "actualTimeInMinutes" TEXT,
ADD COLUMN     "actualElevationInFeet" INTEGER,
ADD COLUMN     "actualNotes" TEXT,
ADD COLUMN     "actualMantras" TEXT,
ADD COLUMN     "actualReflection" TEXT;
