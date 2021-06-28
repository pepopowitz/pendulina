import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react'

export const WorkoutDetails = function () {
  return (
    <Box p={2} bgColor="gray.50" boxShadow="sm" width="280px">
      <Flex p={1} mb={2} justifyContent="space-between">
        <Text size="md" as="h3" textAlign="center" fontWeight="bold">
          Workout Details
        </Text>

        <Button size="xs" colorScheme="green" variant="outline" boxShadow="md">
          Edit{' '}
        </Button>
      </Flex>
      <Detail title="Activity" content="Cycling" bgColor="white" />
      <Detail title="Distance" content="12.5 / 10" />
      <Detail title="Duration" content="40m / 30m" bgColor="white" />
    </Box>
  )
}

function Detail({ title, content, bgColor = 'gray.50' }) {
  return (
    <Flex justifyContent="space-between" p={2} bgColor={bgColor}>
      <Text textAlign="left" fontSize="xs" fontWeight="bold">
        {title}
      </Text>
      <Text textAlign="right" fontSize="xs">
        {content}
      </Text>
    </Flex>
  )
}
