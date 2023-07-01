import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack,createTokens, Button } from 'tamagui'
import config from './tamagui.config'


///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////




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
    <TamaguiProvider config={config} defaultTheme="dark">
      <Theme name="dark">
        <Theme name="green">
            <YStack f={1} jc="center" ai="center" backgroundColor={`pink`}>
                      <Paragraph color="$darkOrange" jc="center">
                        {colorScheme}
                      </Paragraph>
                        <Button>I'm a simple button</Button>
                      <StatusBar style="auto" />
                    </YStack>

        </Theme>
      </Theme>
    </TamaguiProvider>
  )
}
