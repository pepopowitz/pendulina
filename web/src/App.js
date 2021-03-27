import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { ChakraProvider } from '@chakra-ui/react'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

if (isBrowser) {
  netlifyIdentity.init()
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <ChakraProvider>
      <AuthProvider client={netlifyIdentity} type="netlify">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </ChakraProvider>
  </FatalErrorBoundary>
)

export default App
