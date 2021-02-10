import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { ChakraProvider } from '@chakra-ui/react'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import ReactDOM from 'react-dom'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

netlifyIdentity.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <ChakraProvider>
      <AuthProvider client={netlifyIdentity} type="netlify">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </ChakraProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
