import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Center } from "native-base";
import theme from './../pesto.theme'

import PestoZStack from "./parts/PestoZStack";
import PestoFlex from "./parts/PestoFlex";

export interface PestoApp {
    name: string;
}

function PestoApp(props: PestoApp) {
  // 2. Use at the root of your app
  return (// 3. Pass the `theme` prop to the `NativeBaseProvider`
    <NativeBaseProvider isSSR={true} theme={theme}>
        <Center>
        <Box flex={100} bg="#fff" alignItems="center" justifyContent="center">

            <PestoZStack name="boris"></PestoZStack>
        </Box>
        <Box flex={100} bg="#fff" alignItems="center" justifyContent="center">

            <PestoZStack name="boris"></PestoZStack>
        </Box>
        </Center>
    </NativeBaseProvider>
  );
}

export default PestoApp;

