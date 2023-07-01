#!/bin/bash

yarn add tamagui

yarn add @tamagui/babel-plugin babel-plugin-transform-inline-environment-variables

npx expo install react-native-reanimated


# --- - --- - 
#  Update your babel.config.js to include
#  the 
#    @tamagui/babel-plugin, transform-inline-environment-variables and react-native-reanimated 
#  plugins:
# 
cat <<EOF >./tmp.babel.config.js
// Don't forget to specify your TAMAGUI_TARGET here or ideally in the command to run / .env files
process.env.TAMAGUI_TARGET = "native";
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // NOTE: this is required to pass the right environment
      [
        "transform-inline-environment-variables",
        {
          include: "TAMAGUI_TARGET",
        },
      ],
      // NOTE: this is optional, you don't *need* the compiler
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      // NOTE: this is only necessary if you are using reanimated for animations
      "react-native-reanimated/plugin",
    ],
  };
}
EOF

cat ./tmp.babel.config.js | tee ./babel.config.js

yarn add tamagui expo-font @tamagui/font-inter @tamagui/theme-base @tamagui/animations-react-native @tamagui/config react-native-web react-dom

cat <<EOF >./tamagui.config.ts
import { createAnimations } from '@tamagui/animations-react-native'
import { createInterFont } from '@tamagui/font-inter'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'
const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})
const headingFont = createInterFont()
const bodyFont = createInterFont()
const config = createTamagui({
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
export type AppConfig = typeof config
declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import 'tamagui'
  interface TamaguiCustomConfig extends AppConfig {}
}
export default config
EOF

cp ./App.tsx ./App.boris2.tsx

cat <<EOF >./App.tsx 
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from 'tamagui'
import config from './tamagui.config'
export default function App() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor={'$backgroundSoft'}>
          <Paragraph color="$color" jc="center">
            {colorScheme}
          </Paragraph>
          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}
EOF

