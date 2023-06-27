import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Center, ZStack } from "native-base";


export interface PestoZStack {
    name: string;
}

function PestoZStack(props: PestoZStack) {
  // 2. Use at the root of your app
  return (
    <Center h="40">
    <Box mt="-32">
      <ZStack mt="3" ml={-50}>
        <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
        <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
        <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
      </ZStack>
    </Box>
  </Center>
  );
}

export default PestoZStack;

