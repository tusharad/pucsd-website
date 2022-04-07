import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container
  } from '@chakra-ui/react'
const Faculty = () => {

   return(
<>
<Container id="Faculty" maxW={'7xl'} p="12" >
<h1>Faculty</h1>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Designation</Th>
        <Th >Qulification</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Dr.Smt. Smita Sunil Bedekar</Td>
        <Td>HOD, Associate Professor</Td>
        <Td>Ph.D.-Maths, M.Sc.-Maths, B.Sc.-Maths</Td>
      </Tr>
      <Tr>
        <Td>Shri. Achyut kumar S Roy</Td>
        <Td>Assistant Professor</Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>Shri. Damodar M Kulkarni	</Td>
        <Td>Assistant Professor</Td>
        <Td>M.C.A.-Computer Science,</Td>
      </Tr>
      <Tr>
        <Td>Shri. Nitin Prakashrao Patil</Td>
        <Td>Assistant Professor</Td>
        <Td>M.Sc.Computer Science-COMPUTER SCIENCE, B.Sc. Computer Science-COMPUTER SCIENCE,</Td>
      </Tr>
      <Tr>
        <Td>Smt. Ritambhra . Korpal</Td>
        <Td>Assistant Professor</Td>
        <Td>Ph.D.-Computer Science, M.C.A.-Computer Science, B.Sc.(H.S.)-Physics,</Td>
      </Tr>
      <Tr>
        <Td>Smt. Pallavi Arvind Mandhare</Td>
        <Td>Assistant Professor</Td>
        <Td>M.Sc.Computer Science-computer science,</Td>
      </Tr>
      <Tr>
        <Td>Dr. Jyoti Yashavant Yadav</Td>
        <Td>Assistant Professor</Td>
        <Td>Computer Science, M.Phil.-computer Science, Ph.D.-Computer Science, M.Sc.Computer Science-Computer Science, B.Sc. Computer Science-Computer Science</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
</Container>
</>
    );
}

export default Faculty;