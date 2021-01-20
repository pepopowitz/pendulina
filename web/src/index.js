import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { ChakraProvider } from '@chakra-ui/react'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import ReactDOM from 'react-dom'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

netlifyIdentity.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <ChakraProvider>
      <AuthProvider client={netlifyIdentity} type="netlify">
        <RedwoodProvider>
          <Routes />
        </RedwoodProvider>
      </AuthProvider>
    </ChakraProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
