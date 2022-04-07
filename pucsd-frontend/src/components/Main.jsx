import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import pucsd_img from "../images/pucsd-old.jpg"

export default function Main() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
       pucsd_img
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Department of Computer Science, SP Pune University
          </Text>
          <Stack direction={'row'}>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}