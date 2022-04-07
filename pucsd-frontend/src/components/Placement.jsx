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

const Placement = () => {
  return (
    <Container id="Placement_Cell" maxW={'7xl'} p="12" >
      <Divider />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading id="About" as="h2">Placement Cell</Heading>
        <Text as="p" fontSize="lg">
        The Placement Cell comprises of a group of student volunteers, unlike in many other campuses. It coordinates the placement activity in the campus for students in the final year of their programme of study. It designs and publishes a Placement Brochure , initiates dialogues with companies in various cities, and organizes interviews on campus for the convenience of students. It is also responsible for Industrial Training placements for MCA students in the 5th semester. It also has a list of companies where our alumni have been placed.
The activities carried out by the Cell provides the volunteers with hands on experience in management and organization. Any queries regarding the Cell and its activities may be mailed to <Link href="mailto:place@cs.unipune.ac.in"> place@cs.unipune.ac.in </Link>  or <Link> placecell.pucsd@gmail.com </Link>. 
        </Text>
        <Heading size="md">Place Cell 2022-23</Heading>
        <Text>Mr. Nitin Patil (Faculty, Placement Co-ordinator)</Text>
        <Text>
Postal Address
</Text>
<Text>
Placement Cell
Department of Computer Science
University of Pune
Pune - 411007
</Text>
<Text>
Phone : +91-20-25695653
</Text>

<Text>
Fax : +91-20-25690794
</Text>

<Text>
Email : place@cs.unipune.ac.in     /     placecell.pucsd@gmail.com
</Text>

      </VStack>
    </Container>
  );
};

export default Placement;