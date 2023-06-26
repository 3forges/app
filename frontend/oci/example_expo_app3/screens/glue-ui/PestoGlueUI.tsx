import { Text } from 'react-native';
import { 
  GluestackUIProvider,
  Center,
  Box,
  Heading,
  VStack
 } from '../../components';
import { config } from '../../gluestack-ui.config';
import PestoMenu from '../../components.pesto/PestoMenu';
import PestoNavBar from '../../components.pesto/PestoNavBar';

export default function PestoGlueUI() {
  return (
    <GluestackUIProvider config={config.theme}>
        <Box         style={{
          width: 500,
          height: 400,
          backgroundColor: '$pink300',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}  >
          {/**
            * React Native wants only unitless dimensions, so that it forces the engneer to let react-native adapt the UI for devices
            * https://reactnative.dev/docs/height-and-width#fixed-dimensions
            */}
          
          <VStack space="md" reversed={false}>
            <Box style={{
          width: 300,
          height: 60,
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }} backgroundColor='$green300' justifyContent='center' >
              <Heading style={{
          backgroundColor: '$pink300',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }} justifyContent='center'  backgroundColor='$pink300' >Pesto</Heading>
        <PestoNavBar title='The Pesto App'/>
            </Box>
            <Box w='$1000' h='$20' bg='$blue400' > 
            <Center bg="$yellow500" h={'$100'} w={'$100'} padding={'$3'} marginLeft={'auto'} marginRight={'auto'}>
              <Text adjustsFontSizeToFit={true} >
                This is the center.
              </Text>
            </Center>
            </Box>
            <Box w='$1000' h='$20' bg='$blue500' />
          </VStack>
        </Box>

      
    </GluestackUIProvider>
  );
}