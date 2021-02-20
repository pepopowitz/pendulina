-- AlterTable
ALTER TABLE "PlanWorkout" ADD COLUMN     "planWeekId" INTEGER;

-- CreateTable
CREATE TABLE "PlanWeek" (
    "id" SERIAL NOT NULL,
    "intention" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlanWorkout" ADD FOREIGN KEY ("planWeekId") REFERENCES "PlanWeek"("id") ON DELETE SET NULL ON UPDATE CASCADE;
