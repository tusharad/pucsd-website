import React from 'react';
import {
  Heading,
  Link,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react';


const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12" >
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading id="About" as="h2">About PUCSD</Heading>
        <Text as="p" fontSize="lg">
        The Pune University, Computer Science Department(PUCSD) University of Pune is a teaching department that aims at providing quality education in Computer Science. As with any education institution, students give the department a dynamic character and an active culture towards Computer Science, guided by their faculty. Apart from teaching postgraduate level Computer Science, the faculty is also involved in research, consultancy and development programs. The support structure of the department provides all the required non-academic support to the students and the faculty.

Details of most of our activities can be found on this site. PUCSD takes care to ensure that the basic scientific principles of Computer Science are presented to the student and actively tries to point out the differences between the Computation as a science and software. Our mission statement elucidates this point further. Another characteristic academic experience at PUCSD for the student is the almost lack of any divide between Computer Science theory and practice. We try our best to maintain a 24x7 availability of our resources.
        </Text>

        <Heading as="h2">History</Heading>
        <Text as="p" fontSize="lg">
        Our Department is one of the earliest CS Departments started in Indian Universities. Back in 1980, when computer science was little known and the word IT didn't exist, a one-year programme was started towards the B.Sc.(Applied) degree in Computer Science. The M.C.A. programme was launched in 1983, the M.Tech. degree programme in 1985, and the one year B.Sc.(Applied) programme was upgraded to a two year M.Sc. in Computer Science in 1986.
</Text>

      </VStack>
    </Container>
  );
};

export default ArticleList;