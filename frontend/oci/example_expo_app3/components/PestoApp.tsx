import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Center } from "native-base";
import theme from './../pesto.theme'

import PestoZStack, { ExampleCenteredCard as Bernard } from "./parts/PestoZStack";
import PestoFlex from "./parts/PestoFlex";

export interface PestoApp {
    name: string;
}

function PestoApp(props: PestoApp) {
  // 2. Use at the root of your app
  return (// 3. Pass the `theme` prop to the `NativeBaseProvider`
    <NativeBaseProvider isSSR={true} theme={theme}>
        <Center>
            <Bernard name="bernard" ></Bernard>

        </Center>
    </NativeBaseProvider>
  );
}

export default PestoApp;

