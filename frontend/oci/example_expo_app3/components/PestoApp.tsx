import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";

import PestoZStack from "./parts/PestoZStack";

export interface PestoApp {
    name: string;
}

function PestoApp(props: PestoApp) {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <PestoZStack name="boris"></PestoZStack>
      </Box>
      
      
      
    </NativeBaseProvider>
  );
}

export default PestoApp;

