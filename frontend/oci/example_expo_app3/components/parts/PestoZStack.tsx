import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Flex, Text, Box, Container, ZStack, Heading, Pressable, HStack, Badge, Spacer } from "native-base";


export interface PestoZStack {
  name: string;
}
export interface ExampleCenteredCardProps {
  name: string;
}


export function ExampleCenteredCard(props: ExampleCenteredCardProps) {
  console.log(props)
  return <Pressable>
      {({
      isHovered,
      isFocused,
      isPressed
    }) => {
      return <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
        transform: [{
          scale: isPressed ? 0.96 : 1
        }]
      }}>
            <HStack alignItems="center">
              <Badge colorScheme="darkBlue" _text={{
            color: 'white'
          }} variant="solid" rounded="4">
                Business
              </Badge>
              <Spacer />
              <Text fontSize={10} color="coolGray.800">
                1 month ago
              </Text>
            </HStack>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              Marketing License
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              Unlock powerfull time-saving tools for creating email delivery and
              collecting marketing data
            </Text>
            <Flex>
              {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                  Read More
                </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                  Read More
                </Text>}
            </Flex>
          </Box>;
    }}
    </Pressable>;
}
function PestoZStack(props: PestoZStack) {
  // 2. Use at the root of your app
  return (
    <Container>
              <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <ZStack mr={'auto'} ml={'auto'}>
        <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
        <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
        <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
      </ZStack>
    </Box>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
    <ZStack mr={'auto'} ml={'auto'}>
      <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
      <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
      <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
    </ZStack>
  </Box>
  </Container>
  );
}

export default PestoZStack;
