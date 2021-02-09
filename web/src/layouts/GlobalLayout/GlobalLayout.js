import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Box, Button, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Flex bg="green.700" py={2} px={5} color="white">
            <HStack spacing={8}>
              <Link to={routes.home()}>Home</Link>
              <AuthorizedLinks />
            </HStack>
            <Spacer />
            <HStack spacing={8}>
              <LogInOrLogOut />
              <Heading fontWeight="bold" size="sm" as="h1">
                Pendulina
              </Heading>
            </HStack>
          </Flex>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout

const AuthorizedLinks = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <Link to={routes.me()}>Me</Link>
      <Link to={routes.plan()}>My Plan</Link>
    </>
  )
}

const LogInOrLogOut = () => {
  const { currentUser, isAuthenticated, logIn, logOut } = useAuth()
  console.log('sjh currentuser', currentUser)
  if (isAuthenticated) {
    return (
      <>
        <Box>{currentUser.user_metadata.full_name}</Box>
        <Button colorScheme="green" onClick={logOut}>
          Log Out
        </Button>
      </>
    )
  } else {
    return (
      <Button colorScheme="green" onClick={logIn}>
        Log In
      </Button>
    )
  }
}
