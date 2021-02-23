import { ChakraProvider } from '@chakra-ui/react'

const StorybookLayout = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default StorybookLayout
