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

const Alumini = () => {
  return (
    <Container id="Alumini_Cell" maxW={'7xl'} p="12" >
      <Divider />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading id="About" as="h2">Alumini Cell</Heading>
        <Text as="p" fontSize="lg">
        The strong sense of belonging our alumni have to the Department is one of its greatest assets. Started in 1994, the Alumni Cell, called "Panini", aims at strengthening the links between the Department and its alumni. "Panini" is now a registered organization. It is managed by an executive body consisting of current and ex-students. It publishes a yearly newsletter informing the alumni about the activities in the Department. It also organizes an annual Alumni meet in December.
        </Text>
      </VStack>
    </Container>
  );
};

export default Alumini;