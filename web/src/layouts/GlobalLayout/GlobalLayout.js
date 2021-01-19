import { Link, routes } from '@redwoodjs/router'
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Flex bg="green.700" py={2} px={5} color="white">
            <HStack spacing={8}>
              <Link to={routes.home()}>Home</Link>
              <Link to={routes.me()}>Me</Link>
              <Link to={routes.plan()}>My Plan</Link>
            </HStack>
            <Spacer />
            <Box>Pendulina</Box>
          </Flex>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
