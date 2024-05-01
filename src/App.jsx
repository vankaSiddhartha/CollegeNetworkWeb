import { useState } from 'react'

import LandingPage from './pages/LandingPage'
import { ChakraProvider } from '@chakra-ui/react';
function App() {
 

  return (
    <ChakraProvider>
       <LandingPage/>

    </ChakraProvider>

  )
}

export default App
