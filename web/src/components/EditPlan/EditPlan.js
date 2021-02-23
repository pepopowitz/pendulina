import { Box, Divider, Heading, Stack } from '@chakra-ui/react'

const EditPlan = ({ plan }) => {
  return (
    <Stack>
      <Box>
        <Heading>{plan.name}</Heading>
        <Box>#{plan.id}</Box>
      </Box>
      <Divider />
      <Stack>
        <PlanWeeks planWeeks={plan.planWeeks} />
      </Stack>
    </Stack>
  )
}

const PlanWeeks = ({ planWeeks }) => {
  return planWeeks.map((planWeek) => {
    return (
      <Stack>
        <Heading size="lg" as="h3">
          Week {planWeek.weekNumber}
        </Heading>
        <Heading size="md" as="h4">
          {planWeek.intention}
        </Heading>
      </Stack>
    )
  })
}
export default EditPlan
