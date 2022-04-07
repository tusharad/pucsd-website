import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

const Academics = () => {
  return (
    <Container id="Academics" maxW={'7xl'} p="12" >
      <Divider />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading id="About" as="h2">Degree Programmes</Heading>
        <Text id="About" fontSize="md">MCA - 2 Years</Text>
        <Text as="p" fontSize="lg">
        The MCA degree primarily aims at training for professional practice in the industry. The programme is designed so that the graduate can adapt to any specific need with ease. The duration of the study is six semesters, which is normally completed in three years.
        </Text>
        <Text id="About" fontSize="md">MSc - 2 Years</Text>
        <Text as="p" fontSize="lg">
        The MSc degree prepares the student for higher studies in Computer Science. The duration of the study is four semesters, which is normally completed in two years. An year long project provides an opportunity to apply the principles to a significant problem.
        </Text>
      </VStack>
    </Container>
  );
};

export default Academics;