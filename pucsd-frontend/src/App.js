import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Academics from "./components/Academics";
import Faculty from './components/Faculty';
import Placement from './components/Placement';
import Alumini from './components/Alumini';
import Gallery from './components/Gallery';

function App() {
  return (
    <ChakraProvider>
      <Box >
        <Header />
        <Main />
        <About />
        <Academics />
        <Faculty />
        <Placement />
        <Alumini />
        <Gallery />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
