import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider>
      <Box >
        <Header />
        <Main />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
