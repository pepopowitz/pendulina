import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

const AdminHomePage = () => {
  console.log(routes)
  return (
    <Stack>
      <Box textAlign="center" my={5}>
        <Heading>Pendulina Admin</Heading>
      </Box>
      <Divider my="5" />

      <Stack>
        <Link as={RedwoodLink} color="green.700" to={routes.adminActivities()}>
          Manage Activities
        </Link>
        <Link as={RedwoodLink} color="green.700" to={routes.adminPlans()}>
          Manage Plans
        </Link>
      </Stack>
    </Stack>
  )
}

export default AdminHomePage
